import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {PagerService} from "../shared/paging/pager.service";
import {CommonModule} from "@angular/common";
import {HomeActions} from "../store/home/home.actions";
import {HomeService} from "./home.service";
import {RouterModule} from "@angular/router";
import {ProfileCardComponent} from "../shared/profile/profile-card.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [PagerService, HomeActions, HomeService],
  exports: [HomeComponent]
})

export class HomeModule { }
