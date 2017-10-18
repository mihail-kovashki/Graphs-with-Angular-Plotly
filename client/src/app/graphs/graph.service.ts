import {Injectable} from '@angular/core';
import {HttpService} from '../core/http.service';

@Injectable()
export class GraphService {
  constructor(private httpService: HttpService) {
  }

  addGraph(graph) {
    return this.httpService.post('api/graph/add', graph, true);
  }

  getGraph(graphId) {
    return this.httpService.get(`api/graph/${graphId}`, true);
  }

  getGraphsByCategory(category) {
    return this.httpService.get(`api/graphs/category/${category}`, true);
  }

  addComment(graphId, comment) {
    return this.httpService.post(`api/graph/comments/${graphId}`, comment, true)
  }
}
