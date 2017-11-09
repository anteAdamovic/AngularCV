import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiographyRoutingModule } from './biography-routing.module';
import { BiographyComponent } from './biography.component';
import { BiographyService } from './biography.service';

@NgModule({
    imports: [
        CommonModule,
        BiographyRoutingModule
    ],
    declarations: [BiographyComponent],
    entryComponents: [BiographyComponent],
    providers: [BiographyService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BiographyModule {
    
}