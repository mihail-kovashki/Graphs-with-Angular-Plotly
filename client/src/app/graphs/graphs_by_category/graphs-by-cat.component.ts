import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgRedux} from "ng2-redux";
import {IAppState} from "../../store/app.state";
import {AuthService} from '../../core/auth.service';
import {GraphModel} from '../graph.model';
import {GraphActions} from '../../store/graph/graph.actions';

@Component({
  selector: 'graphs-by-cat',
  templateUrl: './graphs-by-cat.component.html'
})

export class GraphsByCategoryComponent implements OnInit{
  graphsByCategory: GraphModel[];
  category: String;

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private graphActions: GraphActions,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigateByUrl('users/login');
    } else {
      this.ngRedux
        .select(state => state.graph)
        .subscribe(graph => {
          this.graphsByCategory = graph.graphsByCategory
        });

      this.activatedRoute.params.subscribe((params: Params) => {
        const category = params['category'];
        this.graphActions.getGraphsByCategory(category);
        switch (category) {
          case 'business':
            this.category = 'Business'
            break
          case 'demography':
            this.category = 'Demography and Social'
            break
          case 'macro':
            this.category = 'Macroeconomic'
            break
          case 'other':
            this.category = 'Other'
            break
          default:
            this.category = 'Not Found'
            return
        }
      });
    }
  }
}
