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
                company: 'Facilisimo (Red de servicios del quindio S.A)',
                duration: '2021 - 2022',
                description:
                    'Participé activamente en el ciclo completo de desarrollo de aplicaciones web, colaborando estrechamente con un equipo multidisciplinario para diseñar, implementar y optimizar soluciones alineadas con los objetivos de negocio.',
                technologies: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'TypeScript',
                    'Vue',
                    'Vuetify',
                    'Ionic',
                    'Codeigniter',
                    'PHP',
                    'MySQL',
                    'Node.js',
                    'Express.js'
                ],
                icon: 'pi pi-mobile'
            }
        ];
    }

    getExperiences(): Promise<Experience[]> {
        return Promise.resolve(this.getExperiencesData());
    }
}
