import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MobileMenu } from '../mobile-menu';
import { DesktopMenu } from '../desktop-menu';
import { ActionsRightWidget } from '../actions-right-widget';
import { Logo } from '../../logo';

@Component({
    selector: 'topbar-widget',
    imports: [
        RouterModule,
        StyleClassModule,
        ButtonModule,
        RippleModule,
        ToolbarModule,
        MobileMenu,
        DesktopMenu,
        ActionsRightWidget,
        Logo
    ],
    templateUrl: './topbarwidget.html'
})
export class Topbarwidget { }
