import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface Experience {
    position: string;
    company: string;
    duration: string;
    description: string;
    technologies: string[];
    icon: string;
}

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'experience-widget',
    templateUrl: './experiencewidget.html',
    styleUrls: ['./experiencewidget.scss'],
    imports: [AnimateOnScroll, CardModule, ButtonModule, Timeline, TagModule, NgIf]
})
export class ExperienceWidget {
    @Input() title: string = 'Experiencia Profesional';
    @Input() subtitle: string = 'Conoce más sobre mi.';

    experiences: Experience[];

    events: EventItem[];

    constructor() {
        this.events = [
            {
                status: 'Ordered',
                date: '15/10/2020 10:30',
                icon: 'pi pi-shopping-cart',
                color: '#9C27B0',
                image: 'game-controller.jpg'
            },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
        this.experiences = [
            {
                position: 'Desarrollador Full Stack',
                company: 'Tech Innovators Corp',
                duration: '2022 - Presente',
                description:
                    'Liderazgo en el desarrollo de aplicaciones empresariales usando Angular y Node.js. Arquitectura de microservicios en AWS.',
                technologies: ['Angular', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
                icon: 'pi pi-code'
            },
            {
                position: 'Frontend Lead',
                company: 'Digital Solutions S.A.',
                duration: '2020 - 2022',
                description: 'Desarrollo de plataformas e-commerce con React y optimización de performance.',
                technologies: ['React', 'Redux', 'GraphQL', 'Jest', 'Webpack'],
                icon: 'pi pi-desktop'
            },
            {
                position: 'Desarrollador Junior',
                company: 'Startup Tech Hub',
                duration: '2018 - 2020',
                description: 'Implementación de features en aplicación móvil híbrida con Ionic Framework.',
                technologies: ['Ionic', 'Capacitor', 'Firebase', 'RxJS', 'Sass'],
                icon: 'pi pi-mobile'
            }
        ];
    }
}
