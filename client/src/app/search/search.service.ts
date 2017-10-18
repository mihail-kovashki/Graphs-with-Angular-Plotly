import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class SearchService {
  constructor(private httpService: HttpService) {
  }

  getSearchedUsers(username) {
    return this.httpService.get(`api/users/findByName/${username}`, true);
  }

}
