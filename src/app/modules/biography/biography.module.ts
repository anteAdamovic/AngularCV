import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BiographyRoutingModule } from './biography-routing.module';
import { BiographyComponent } from './biography.component';

@NgModule({
    imports: [BiographyRoutingModule],
    declarations: [BiographyComponent],
    entryComponents: [BiographyComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BiographyModule {
    
}