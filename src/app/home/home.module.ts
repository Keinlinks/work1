import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home.component';
const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () =>
      import('../modules/clientes/clientes.module').then(
        (m) => m.ClientesModule
      ),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('../modules/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
  {
    path: 'notificaciones',
    loadChildren: () =>
      import('../modules/notificaciones/notificaciones.module').then(
        (m) => m.NotificacionesModule
      ),
  },
  {
    path: 'formulario',
    loadChildren: () =>
      import('../modules/formulario/formulario.module').then(
        (m) => m.FormularioModule
      ),
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
