import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    QRCodeModule 
  ],
  declarations: [
    NavigationbarComponent,
  ],
  exports: [
    NavigationbarComponent
  ]
})
export class ComponentsModule { }
