import {initialState, IGraphState} from './graph.state';
import {GRAPH_CREATED, GRAPH_LOADED, GRAPHS_BY_CATEGORY_LOADED, COMMENT_ADDED} from './graph.actions';

function graphLoaded(state: IGraphState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    loadedGraphLink: result.graphLink,
    loadedGraphCategory: result.graphCategory,
    loadedGraphName: result.graphName,
    loadedGraphComments: result.comments
  });
}

function graphsByCategoryLoaded(state: IGraphState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    graphsByCategory: result
  });
}

function commentAdded(state: IGraphState, action: any) {
  const result = action.result;
  const newComments = state.loadedGraphComments;
  newComments.push(result);
  console.log('after')
  return Object.assign({}, state, {
    loadedGraphComments: newComments
  });
}

export function graphReducer(state = initialState, action) {
  switch (action.type ) {
    case GRAPH_CREATED:
      return state;
    case GRAPH_LOADED:
      return graphLoaded(state, action);
    case GRAPHS_BY_CATEGORY_LOADED:
      return graphsByCategoryLoaded(state, action);
    case COMMENT_ADDED:
      return commentAdded(state, action);
    default:
      return state;
  }
}
