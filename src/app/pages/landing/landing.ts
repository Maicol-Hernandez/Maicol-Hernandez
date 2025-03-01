import { Component } from '@angular/core';
import { ScrollTopModule } from 'primeng/scrolltop';
import { Topbarwidget } from './components/nav-menu/topbarwidget';
import { FooterWidget } from './components/footerwidget';
import { Herowidget } from './components/hero/herowidget';
import { ServicesWidget } from './components/serviceswidget';
import { AboutWidget } from './components/about/aboutwidget';
import { ExperienceWidget } from './components/experience/experiencewidget';
import { PortfolioWidget } from './components/portfoliowidget';
import { ContactsWidget } from './components/contactswidget';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        ScrollTopModule,
        FooterWidget,
        Topbarwidget,
        // ServicesWidget,
        Herowidget,
        AboutWidget,
        ExperienceWidget,
        // PortfolioWidget,
        ContactsWidget
    ],
    template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div id="home" class="overflow-hidden">
                <topbar-widget />
                <hero-widget />

                <div class="relative overflow-hidden py-16 lg:py-24 bg-surface-50 dark:bg-surface-900">
                    <about-widget />
                    <experience-widget />
                    <!-- <services-widget /> -->
                    <!-- <portfolio-widget /> -->
                    <contacts-widget />
                </div>

                <footer-widget />

                <p-scrolltop
                    [threshold]="100"
                    icon="pi pi-arrow-up"
                    [buttonProps]="{ severity: 'primary', raised: true, rounded: true }"
                />
            </div>
        </div>
    `
})
export class Landing {}
