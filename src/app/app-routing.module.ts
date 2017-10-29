import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'biography',
    loadChildren: 'app/modules/biography/biography.module#BiographyModule'
  },
  {
    path: 'technologies',
    loadChildren: 'app/modules/technologies/technologies.module#TechnologiesModule'
  },
  {
    path: 'skills',
    loadChildren: 'app/modules/skills/skills.module#SkillsModule'
  },
  {
    path: 'education',
    loadChildren: 'app/modules/education/education.module#EducationModule'
  },
  {
    path: 'experience',
    loadChildren: 'app/modules/experience/experience.module#ExperienceModule'
  },
  {
    path: 'social-networks',
    loadChildren: 'app/modules/social-networks/social-networks.module#SocialNetworksModule'
  },
  {
    path: 'contact',
    loadChildren: 'app/modules/contact/contact.module#ContactModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
