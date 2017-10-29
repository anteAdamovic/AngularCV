import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';

@NgModule({
    imports: [EducationRoutingModule],
    declarations: [EducationComponent],
    entryComponents: [EducationComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EducationModule { }