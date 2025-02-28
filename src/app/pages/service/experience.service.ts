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
                company: 'First Entry',
                duration: '2023 - 2025',
                description:
                    'Lideré el desarrollo de un sistema integral de gestión de eventos que abarcó desde la creación y configuración hasta la automatización de procesos clave. Implementé módulos críticos (GateFlow, Design My VIP, Picture Perfect, formularios de registro y sorteos con reglas de negocio avanzadas) que permitieron automatizar la determinación de ganadores, reduciendo tiempos y errores operativos.',
                technologies: [
                    'HTML',
                    'CSS',
                    'Bootstrap',
                    'Javascript',
                    'PHP',
                    'JQuery',
                    'Laravel',
                    'Livewire',
                    'AWS',
                    'MySQL',
                    'Docker',
                    'Git',
                    'GitHub',
                    'Apache'
                ],
                icon: 'pi pi-code'
            },
            {
                position: 'Desarrollador Full Stack',
                company: 'Urbimall',
                duration: '2023 - 2024',
                description:
                    'En mi rol, lideré la creación de soluciones web con Laravel para el sector e-commerce, enfocándome en diseñar y desplegar aplicaciones que mejoraran la eficiencia operativa y la experiencia del usuario. Gracias a la integración de APIs y servicios clave, logré optimizar procesos críticos como envíos, gestión de inventario, procesamiento de órdenes y pagos, lo que se tradujo en una reducción notable de tiempos operativos y en un aumento en la tasa de conversión.',
                technologies: [
                    'HTML',
                    'CSS',
                    'Bootstrap',
                    'Javascript',
                    'JQuery',
                    'Laravel',
                    'AWS',
                    'MySQL',
                    'Git',
                    'GitHub',
                    'GitLab',
                    'Apache'
                ],
                icon: 'pi pi-code'
            },
            {
                position: 'Desarrollador Junior',
                company: 'Dyalogo SAS',
                duration: '2022 - 2023',
                description:
                    'Desarrollo completo de aplicaciones web en colaboración con un equipo de desarrolladores senior y profesionales de TI, logrando entregar soluciones orientadas al negocio que mejoraron la eficiencia operativa y la experiencia del usuario.',
                technologies: [
                    'Bootstrap',
                    'JavaScript',
                    'JQuery',
                    'PHP',
                    'MySQL',
                    'Node.js',
                    'Git',
                    'GitHub',
                    'Apache'
                ],
                icon: 'pi pi-desktop'
            },
            {
                position: 'Desarrollador Junior',
                company: 'Facilisimo (Red de servicios del quindio S.A)',
                duration: '2021 - 2022',
                description:
                    'Participé activamente en el ciclo completo de desarrollo de aplicaciones web, colaborando estrechamente con un equipo multidisciplinario para diseñar, implementar y optimizar soluciones alineadas con los objetivos de negocio.',
                technologies: [
                    'JavaScript',
                    'TypeScript',
                    'Vue',
                    'Vuetify',
                    'Ionic',
                    'Codeigniter',
                    'MySQL',
                    'Node.js',
                    'Git',
                    'GitHub',
                    'Apache'
                ],
                icon: 'pi pi-mobile'
            }
        ];
    }

    getExperiences(): Promise<Experience[]> {
        return Promise.resolve(this.getExperiencesData());
    }
}
