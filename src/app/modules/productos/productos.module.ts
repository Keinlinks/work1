import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductosComponent }]),
    MatButtonModule,
    MatTableModule,
  ],
})
export class ProductosModule {}
