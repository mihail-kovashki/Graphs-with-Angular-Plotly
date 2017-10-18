import {Component, OnInit} from '@angular/core';
import {GraphModel} from './graph.model';
import {Router} from '@angular/router';
import {GraphActions} from '../store/graph/graph.actions';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'graph-add',
  templateUrl: './graph-add.component.html'
})

export class GraphAddComponent {
  graph: GraphModel = new GraphModel();
  currentUser: string = null;

  constructor(private graphActions: GraphActions,
              private router: Router,
              private authService: AuthService) {
  }

  // ngOnInit() {
  //   this.currentUser = this.authService.getUser();
  // }

  addGraph() {
    this.graphActions.addGraph(this.graph);
    // this.router.navigateByUrl(`user/profile/${this.currentUser['id']}`);
  }
}
