import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    public links: any[] = [
        'home', 
        'biography',
        'technologies',
        'skills',
        'education',
        'experience',
        'social-networks',
        'contact'
    ];

    constructor(private router: Router) { }

    public redirectTo(link: string): void {
        console.log('Redirecting to:', link);
        this.router.navigateByUrl(link);
    }

    public capitalize(label: string): string {
        return label.toUpperCase();
    }
}