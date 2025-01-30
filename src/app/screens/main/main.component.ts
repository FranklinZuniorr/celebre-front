import { Component } from '@angular/core';
import { FormNewCelebrationComponent } from './components/form-new-celebration/form-new-celebration.component';
import { DelayDigitationComponent } from '../../components/delay-digitation/delay-digitation.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main',
  imports: [FormNewCelebrationComponent, DelayDigitationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  teste: string = environment.apiUrl;

  constructor() {
    console.log(this.teste);
  }
}
