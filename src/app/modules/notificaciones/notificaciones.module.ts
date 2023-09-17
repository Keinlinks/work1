import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotificacionesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NotificacionesComponent }]),
  ],
})
export class NotificacionesModule {}
