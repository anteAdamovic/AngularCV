import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [ContactRoutingModule],
    declarations: [ContactComponent],
    entryComponents: [ContactComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule {
    
}