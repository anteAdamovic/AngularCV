import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {

}