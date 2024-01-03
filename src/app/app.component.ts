import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonRouterOutlet, IonicModule, RouterLink],
})
export class AppComponent {
  constructor() { }
}
