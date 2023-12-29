import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaSearchComponent } from './tarjeta-search.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [TarjetaSearchComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TarjetaSearchComponent]
})
export class TarjetaSearchModule { } 
