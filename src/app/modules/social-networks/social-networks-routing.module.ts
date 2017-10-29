import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialNetworksComponent } from './social-networks.component';

const routes: Routes = [
  {
    path: '',
    component: SocialNetworksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialNetworksRoutingModule { }