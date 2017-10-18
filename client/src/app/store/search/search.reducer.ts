import {initialState, ISearchState} from "./search.state";
import {SEARCH_USERS} from "./search.actions";
import {UserModel} from "../home/user.model";

function searchUsers(state: ISearchState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    users: result,
  })
}

export function searchReducer(state = initialState, action) {
  if (action.type === SEARCH_USERS) {
    return searchUsers(state, action);
  } 
  return state
}
