import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';

@NgModule({
    imports: [SkillsRoutingModule],
    declarations: [SkillsComponent],
    entryComponents: [SkillsComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsModule {
    
}