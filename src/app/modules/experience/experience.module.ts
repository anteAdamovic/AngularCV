import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
    imports: [ExperienceRoutingModule],
    declarations: [ExperienceComponent],
    entryComponents: [ExperienceComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExperienceModule {
    
}