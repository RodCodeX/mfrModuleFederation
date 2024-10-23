import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shell';

  listNav:any = [
    {
      path: 'pruebaViernes/algo',
      label: 'Algo'
    },
    {
      path: 'pruebaViernes/button',
      label: 'Button'
    },
    {
      path: 'pruebaViernes/card',
      label: 'Card'
    },
    {
      path: 'pruebaViernes/formularios',
      label: 'Formularios'
    },
    {
      path: 'pruebaViernes/message',
      label: 'Message'
    }
  ]
}
