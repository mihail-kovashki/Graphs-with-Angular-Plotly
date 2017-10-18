import {Injectable} from "@angular/core";
import {HomeService} from "../../home/home.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";

export const TOTAL_GRAPHS = 'graphs/TOTAL';
export const GRAPH_PAGE = 'graphs/PAGE';

@Injectable()
export class HomeActions {
  constructor(private homeService: HomeService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getTotalGraphs() {
    this.homeService
      .getTotalGraphs()
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: TOTAL_GRAPHS,
          result
        });
      })
  }

  getPageOfGraphs (page: number) {
    this.homeService
      .getPageOfGraphs(page)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GRAPH_PAGE,
          result
        });
      })
  }
}
