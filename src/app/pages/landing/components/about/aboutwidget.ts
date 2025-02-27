import { Component, Input, OnInit } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

interface SocialLink {
    icon: string;
    url: string;
}

@Component({
    selector: 'about-widget',
    imports: [AnimateOnScrollModule, ScrollTopModule, ImageModule, CardModule, TagModule, ButtonModule],
    templateUrl: './aboutwidget.html',
    styleUrls: ['./aboutwidget.scss']
})
export class AboutWidget implements OnInit {
    @Input() title: string = 'Acerca de';
    @Input() subtitle: string = 'Conoce más sobre mi.';

    technologies = <string[]>[];

    socialLinks = <SocialLink[]>[];

    particles = Array.from({ length: 15 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5
    }));

    constructor() {}

    downloadCV(): void {
        window.open('assets/cv/Michael_hernadez_peralta_cv_03_01_2025.pdf', '_blank');
    }

    ngOnInit(): void {
        this.socialLinks = [
            { icon: 'pi pi-github', url: 'https://github.com/Maicol-Hernandez' },
            { icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/maicol-hernandez-peralta' },
            { icon: 'pi pi-twitter', url: 'https://x.com/MaicolH51717221' }
        ];

        this.technologies = [
            'HTML',
            'CSS',
            'Sass',
            'Bootstrap',
            'Tailwind',
            'PHP',
            'Laravel',
            'Livewire',
            'Inertia.js',
            'Codeigniter',
            'TypeScript',
            'JavaScript',
            'JQuery',
            'Angular',
            'PrimeNG',
            'Material',
            'Vue',
            'Vuetify',
            'Node.js',
            'Express',
            'Java',
            'Spring Boot',
            'SQL',
            'MySQL',
            'SQLite',
            'Docker',
            'GCP',
            'Heroku',
            'Netlify',
            'Vercel',
            'Npm',
            'Git',
            'GitHub',
            'GitLab',
            'Bitbucket',
            'Linux',
            'windows',
            'Wsl2',
            'VsCode'
        ];
    }
}
