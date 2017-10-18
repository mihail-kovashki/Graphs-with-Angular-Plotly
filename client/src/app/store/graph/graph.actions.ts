import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../app.state';
import {GraphService} from '../../graphs/graph.service';
import {ListPostsService} from '../../profile/list-posts/list-posts.service';

export const GRAPH_CREATED = 'graph/CREATED';
export const GRAPH_LOADED = 'graph/LOADED';
export const GRAPHS_BY_CATEGORY_LOADED = 'graph/BY_CATEGORY_LOADED';
export const COMMENT_ADDED = 'graph/COMMENT_ADDED';

@Injectable()
export class GraphActions {
  constructor(private graphService: GraphService,
              private listPostsService: ListPostsService,
              private ngRedux: NgRedux<IAppState>) {
  }

  addGraph(graph) {
    this.graphService
      .addGraph(graph)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GRAPH_CREATED,
          result
        });
      });
  }

  getGraph(graphId){
    this.graphService
      .getGraph(graphId)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GRAPH_LOADED,
          result
        });
      });
  }

  getGraphsByCategory(category) {
    this.graphService
      .getGraphsByCategory(category)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GRAPHS_BY_CATEGORY_LOADED,
          result
        });
      });
  }

  addComment(graphId, comment) {
    this.graphService
      .addComment(graphId, comment)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: COMMENT_ADDED,
          result
        })
      })
  }

  // getAllPosts(userId) {
  //   this.listPostsService
  //     .getAllPosts(userId)
  //     .subscribe(result => {
  //       this.ngRedux.dispatch({
  //         type: ALL_POSTS,
  //         result
  //       });
  //     });
  // }

  // deletePost(postId) {
  //   this.listPostsService
  //     .deletePost(postId)
  //     .subscribe(result => {
  //       this.ngRedux.dispatch({
  //         type: DELETE_POST,
  //         result
  //       });
  //     });
  // }
}
