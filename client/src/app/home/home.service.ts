import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class HomeService {
  constructor(private httpService: HttpService) {
  }

  getTotalGraphs() {
    return this.httpService.get('api/graphs/total');
  }

  getPageOfGraphs (page) {
    return this.httpService.get(`api/graphs/page?page=${page}`);
  }

}
