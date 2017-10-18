import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SingleGraphComponent} from './single-graph.component';
import {GraphAddComponent} from './graph-add.component';
import {GraphActions} from '../store/graph/graph.actions';
import {GraphService} from './graph.service';
import {GraphsByCategoryComponent} from './graphs_by_category/graphs-by-cat.component';

@NgModule({
  declarations: [SingleGraphComponent, GraphAddComponent, GraphsByCategoryComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [GraphActions, GraphService]
})

export class GraphModule { }
