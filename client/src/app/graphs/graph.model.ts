import {CommentModel} from "./comment.model";

export class GraphModel {
  constructor(
      public graphName: string = '',
      public graphLink: string = '',
      public graphCategory: string = '',
      public comments: CommentModel[] = [],
    ) {
  }
}
