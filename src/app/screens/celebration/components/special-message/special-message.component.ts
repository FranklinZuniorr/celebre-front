import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-message',
  imports: [],
  templateUrl: './special-message.component.html',
  styleUrl: './special-message.component.scss'
})
export class SpecialMessageComponent {
  @Input() message: string = '';
}
