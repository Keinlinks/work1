import { Component, signal } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  categoria: string = '';
  content = signal('');
  style = signal('1');
  icons: string[] = ['check_circle', 'info', 'contact_phone', 'help'];
  backgroundStyle: string[] = [
    'rgba(237, 247, 237, 0.9)',
    'rgba(229, 246, 253,0.9)',
    'rgba(229, 200, 253,0.9)',
    'rgba(200, 200, 200,0.9)',
  ];
  constructor(private router: ActivatedRoute) {
    router.paramMap.subscribe((params) => {
      this.categoria = params.get('categoria') || '';
    });
  }
  toppings = new FormControl('');
  toppingList: string[] = [
    'Usuario',
    'Usuario',
    'Usuario',
    'Usuario',
    'Usuario',
    'Usuario',
  ];
}
