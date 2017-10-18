import {initialState, IHomeState} from "./home.state";
import {TOTAL_GRAPHS, GRAPH_PAGE} from "./home.actions";
import {UserModel} from "./user.model";

function totalGraphs(state: IHomeState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    totalGraphs: result.totalGraphs,
  })
}

function pagedGraphs (state:IHomeState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    pagedGraphs: result,
  })
}

export function homeReducer(state = initialState, action) {
  if (action.type === TOTAL_GRAPHS) {
    return totalGraphs(state, action);
  } else if (action.type  === GRAPH_PAGE) {
    return pagedGraphs(state, action);
  }
  return state
}
