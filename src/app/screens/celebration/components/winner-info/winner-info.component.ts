import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DelayDigitationComponent } from '../../../../components/delay-digitation/delay-digitation.component';

@Component({
  selector: 'app-winner-info',
  imports: [TitleCasePipe, DelayDigitationComponent],
  templateUrl: './winner-info.component.html',
  styleUrl: './winner-info.component.scss'
})
export class WinnerInfoComponent {
  @Input() username: string = '';
  @Input() photo: string = '';
}
