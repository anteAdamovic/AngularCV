import { Component } from '@angular/core';
import { BiographyService } from './biography.service';

@Component({
    selector: 'biography-component',
    templateUrl: 'biography.component.html',
    styleUrls: ['biography.component.css']
})
export class BiographyComponent {
    public biographyData: any;
    
    constructor(private biographyService: BiographyService) {
        this.biographyService.getBiography().subscribe(
            (biographyData: any) => {
                this.biographyData = biographyData;
            }
        );
    }
}