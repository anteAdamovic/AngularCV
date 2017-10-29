import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SocialNetworksRoutingModule } from './social-networks-routing.module';
import { SocialNetworksComponent } from './social-networks.component';

@NgModule({
    imports: [SocialNetworksRoutingModule],
    declarations: [SocialNetworksComponent],
    entryComponents: [SocialNetworksComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SocialNetworksModule {
    
}