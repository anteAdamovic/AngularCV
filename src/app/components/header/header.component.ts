import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    public selected: string;

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

    constructor(private router: Router) {
        this.selected = window.location.pathname.replace('/', '');
        if (this.selected === '') {
            this.selected = 'home';
        }
    }

    public redirectTo(link: string): void {
        this.selected = link;
        this.router.navigateByUrl(link);
    }

    public capitalize(label: string): string {
        return label.toUpperCase();
    }
}