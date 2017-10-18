import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgRedux} from "ng2-redux";
import {IAppState} from "../store/app.state";
import {AuthService} from '../core/auth.service';
import {GraphModel} from './graph.model';
import {CommentModel} from './comment.model';
import {GraphActions} from '../store/graph/graph.actions';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'single-graph',
  templateUrl: './single-graph.component.html'
})

export class SingleGraphComponent implements OnInit{
  graph: GraphModel = new GraphModel();
  comment: CommentModel = new CommentModel

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private graphActions: GraphActions,
              private router: Router,
              private sanitizer: DomSanitizer,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigateByUrl('users/login');
    } else {
      this.ngRedux
        .select(state => state.graph)
        .subscribe(graph => {
          this.graph.graphLink = graph.loadedGraphLink,
          this.graph.graphCategory = graph.loadedGraphCategory,
          this.graph.graphName = graph.loadedGraphName,
          this.graph.comments = graph.loadedGraphComments
        });

      this.activatedRoute.params.subscribe((params: Params) => {
        const graphId = params['id'];
        this.graphActions.getGraph(graphId);
      });
    }
  }

  addComment() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const graphId = params['id'];
      this.graphActions.addComment(graphId, this.comment)
    });
  }

  convertDate (date) {
    const dateToConvert = new Date(date);
    let dateToDisplay = dateToConvert.toString();
    dateToDisplay = dateToDisplay.slice(0, dateToDisplay.indexOf('GMT'));
    return dateToDisplay;
  }
}
