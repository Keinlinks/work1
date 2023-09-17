import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { PageFormularioComponent } from './page-formulario/page-formulario.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [FormularioComponent, PageFormularioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':categoria',
        component: FormularioComponent,
      },
    ]),
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class FormularioModule {}
