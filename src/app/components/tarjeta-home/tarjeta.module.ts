import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TarjetaComponent
  ]
})
export class TarjetaModule { }
