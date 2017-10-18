import {GraphModel} from "../../graphs/graph.model";
import {CommentModel} from "../../graphs/comment.model";

export interface IGraphState {
  graphName: string;
  graphLink: string;
  graphCategory: string;
  loadedGraphLink: string;
  loadedGraphCategory: string;
  loadedGraphName: string;
  graphsByCategory: GraphModel[];
  loadedGraphComments: CommentModel[]
}

export const initialState: IGraphState = {
  graphName: '',
  graphLink: '',
  graphCategory: '',
  loadedGraphLink: '',
  loadedGraphCategory: '',
  loadedGraphName: '',
  graphsByCategory: [],
  loadedGraphComments: []
};
