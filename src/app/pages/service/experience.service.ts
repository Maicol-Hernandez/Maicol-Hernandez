import { Injectable } from '@angular/core';

export interface Experience {
    position: string;
    company: string;
    duration: string;
    description: string;
    technologies: string[];
    icon: string;
}

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {
    constructor() {}

    getExperiencesData(): Experience[] {
        return [
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

    getExperiences(): Promise<Experience[]> {
        return Promise.resolve(this.getExperiencesData());
    }
}
