import {Component, OnInit} from '@angular/core';
import {PagerService} from "../shared/paging/pager.service";
import {HomeActions} from "../store/home/home.actions";
import {IAppState} from "../store/app.state";
import {NgRedux} from "ng2-redux";
import {AuthService} from "../core/auth.service";
import {GraphModel} from "../graphs/graph.model";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [`a.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }`]
})
export class HomeComponent implements OnInit {
  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: GraphModel[];

  isAuthenticated = false;

  constructor(private pagerService: PagerService,
              private homeActions: HomeActions,
              private ngRedux: NgRedux<IAppState>,
              private authService: AuthService) {
  }

  ngOnInit() {
   
    this.homeActions.getTotalGraphs();

    this.ngRedux
      .select(state => state.home)
      .subscribe((home) => {
        this.pagedItems = home.pagedGraphs;
        this.allItems = new Array(home.totalGraphs);
      });

    // this.ngRedux
    //   .select(state => state.users)
    //   .subscribe((users) => {
    //     this.isAuthenticated = users.userAuthenticated;
    //   });
      
    this.setPage(1)
  }

  setPage(page: number) {
    this.homeActions.getPageOfGraphs(page);
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
  }
}
