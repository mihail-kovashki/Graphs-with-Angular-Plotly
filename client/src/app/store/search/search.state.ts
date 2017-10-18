import {UserModel} from "../home/user.model";

export interface ISearchState {
  users: UserModel[];
}

export const initialState: ISearchState = {
  users: []
};
