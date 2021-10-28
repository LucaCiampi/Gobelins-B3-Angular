import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {ClientComponent} from './client/client.component';
import {SwitcherComponent} from './switcher/switcher.component';
import {ScrollspyDirective} from './scrollspy.directive';
import {FooterComponent} from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { CtaComponent } from './cta/cta.component';
import { FeaturesComponent } from './features/features.component';
import {PricingComponent} from "./pricing/pricing.component";
import {ContactComponent} from "./contact/contact.component";
import { ExternalLinksComponent } from './team/external-links/external-links.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ExcerptPipe} from "../pipes/excerpt.pipe";

@NgModule({
  declarations: [
    ClientComponent,
    SwitcherComponent,
    ScrollspyDirective,
    FooterComponent,
    ServicesComponent,
    TeamComponent,
    FaqComponent,
    CtaComponent,
    FeaturesComponent,
    PricingComponent,
    ContactComponent,
    ExternalLinksComponent,
    ExcerptPipe
  ],
    imports: [
        CommonModule,
        CarouselModule,
        ScrollToModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [
    ClientComponent,
    SwitcherComponent,
    ScrollspyDirective,
    FooterComponent,
    ServicesComponent,
    TeamComponent,
    FaqComponent,
    CtaComponent,
    FeaturesComponent,
    PricingComponent,
    ContactComponent,
    ExternalLinksComponent,
    ExcerptPipe
  ]
})
export class SharedModule {
}
