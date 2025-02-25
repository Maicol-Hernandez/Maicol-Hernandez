import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'about-widget',
    imports: [AnimateOnScrollModule, ScrollTopModule, ImageModule, CardModule, TagModule, ButtonModule],
    templateUrl: './aboutwidget.html',
    styleUrls: ['./aboutwidget.scss']
})
export class AboutWidget {
    @Input() title: string = 'Acerca de';
    @Input() subtitle: string = 'Conoce más sobre mi.';

    technologies = ['Angular 19', 'TypeScript', 'Node.js', 'PrimeNG', 'Tailwind CSS', 'AWS', 'Docker'];

    socialLinks = [
        { icon: 'pi pi-github', url: 'https://github.com' },
        { icon: 'pi pi-linkedin', url: 'https://linkedin.com' },
        { icon: 'pi pi-twitter', url: 'https://twitter.com' }
    ];
}
