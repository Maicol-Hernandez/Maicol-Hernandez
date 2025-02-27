import { Component, inject, Input, OnInit } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ExperienceService, Experience } from '../../../service/experience.service';

@Component({
    selector: 'experience-widget',
    templateUrl: './experiencewidget.html',
    styleUrls: ['./experiencewidget.scss'],
    imports: [AnimateOnScroll, CardModule, ButtonModule, Timeline, TagModule]
})
export class ExperienceWidget implements OnInit {
    @Input() title: string = 'Experiencia Profesional';
    @Input() subtitle: string = 'Conoce más sobre mi.';

    experiences: Experience[] = [];
    private experienceService = inject(ExperienceService);

    constructor() {}

    ngOnInit(): void {
        this.experienceService.getExperiences().then((experiences) => (this.experiences = experiences));
    }
}
