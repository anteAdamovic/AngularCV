import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';

@NgModule({
    imports: [TechnologiesRoutingModule],
    declarations: [TechnologiesComponent],
    entryComponents: [TechnologiesComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TechnologiesModule {
    
}