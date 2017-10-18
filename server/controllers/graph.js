const Graph = require('../models/Graph')
const User = require('../models/User')
const Comment = require('../models/Comment')

module.exports = {
  add: (req, res) => {
    let authorId = req.user._id
    let authorUsername = req.user.username
    let inputData = req.body
    let graphData = {
      graphName: inputData.graphName,
      author: authorId,
      authorUsername: authorUsername,
      graphLink: inputData.graphLink,
      graphCategory: inputData.graphCategory
    }
    Graph.create(graphData)
      .then(graph => {
        if (!graph) { return res.status(500).send({message: 'Cannot write graph in database'}) }

        res.status(200).send({message: `Graph was successfully added!`})
      })
  },
  get: (req, res) => {
    let graphId = req.params.graphId
    Graph
      .findById(graphId)
      .populate('comments', 'content authorName dateCreated', null, {sort: {dateCreated: 1}})
      .then((graph) => {
        if (!graph) {
          res.sendStatus(404)
          return
        }
        res.status(200).send(graph)
      })
  },
  all: {
    get: (req, res) => {
      if (!req.user) {
        res.status(200).send({message: 'Not authorized.'})
        return
      }
      Graph
        .find()
        .populate('comments', 'content author', null, {sort: {dateCreated: 1}})
        .populate('author', 'username')
        .sort('-creationDate')
        .then((graphs) => {
          res.status(200).send(graphs)
        })
    }
  },
  total: {
    get: (req, res) => {
      Graph.count().then(result => {
        res.send({totalGraphs: result})
      })
    }
  },
  page: {
    get: (req, res) => {
      const pageSize = 10
      let currentPage = Number(req.query.page)
      if (!currentPage) {
        currentPage = 1
      }
      if (currentPage === 0) {
        currentPage = 1
      }

      let skip = (currentPage - 1) * pageSize
      Graph
        .find({})
        .sort('-creationDate')
        .skip(skip)
        .limit(10)
        .then((result) => {
          res.send(result)
        })
    }
  },
  category: {
    get: (req, res) => {
      let category = req.params.category
      if (!category) {
        res.sendStatus(404)
        return
      }
      let categoryToFind = ''
      switch (category) {
        case 'business':
          categoryToFind = 'Business'
          break
        case 'demography':
          categoryToFind = 'Demography and Social'
          break
        case 'macro':
          categoryToFind = 'Macroeconomic'
          break
        case 'other':
          categoryToFind = 'Other'
          break
        default:
          res.sendStatus(404)
          return
      }

      Graph
        .find({ 'graphCategory': categoryToFind })
        .collation({locale: 'en', strength: 2})
        .sort({graphName: 1})
        .then((result) => {
          res.send(result)
        })
    }
  },
  commentGraph: (req, res) => {
    let graphId = req.params.graphId
    let inputData = req.body

    let commentObj = {
      author: req.user._id,
      authorName: req.user.username,
      content: inputData.content,
      graph: graphId
    }

    Graph
      .findById(graphId)
      .then((graph) => {
        Comment
          .create(commentObj)
          .then((comment) => {
            graph.comments.push(comment._id)
            graph
              .save()
              .then(() => res.status(200).send(comment))
          })
      })
  }
}
