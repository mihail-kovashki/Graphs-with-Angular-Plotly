import {GraphModel} from "../../graphs/graph.model";

export interface IHomeState {
  totalGraphs: number;
  pagedGraphs: GraphModel[];
}

export const initialState: IHomeState = {
  totalGraphs: null,
  pagedGraphs: []
};
