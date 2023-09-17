import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ClientesComponent }]),
    MatTableModule,
    MatButtonModule,
  ],
})
export class ClientesModule {}
