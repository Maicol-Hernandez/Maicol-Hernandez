import { Component, Input } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
    selector: 'about-widget',
    imports: [AnimateOnScrollModule, ScrollTopModule],
    templateUrl: './aboutwidget.html',
    styleUrls: ['./aboutwidget.scss']
})
export class AboutWidget {
    @Input() title: string = 'Acerca de';
    @Input() subtitle: string = 'Conoce más sobre mi.';
}
