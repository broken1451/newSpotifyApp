import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './loading/loading.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    NoimagePipe,
    LoadingComponent,
    DomSeguroPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [NavbarComponent, NoimagePipe, LoadingComponent, DomSeguroPipe]
})
export class SharedModule { }
