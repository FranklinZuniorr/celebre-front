import { Component, EventEmitter, Output } from '@angular/core';
import { ENUM_CELEBRATION_STEPS } from '../../constants';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss'
})
export class GiftComponent {
  @Output() onClickGift = new EventEmitter<ENUM_CELEBRATION_STEPS>();

  ENUM_CELEBRATION_STEPS = ENUM_CELEBRATION_STEPS;

  onClick() {
    const giftDocument = document.getElementById('gift');
    if (!giftDocument) return;
    giftDocument.classList.add('exit');
    setTimeout(() => this.onClickGift.emit(ENUM_CELEBRATION_STEPS.GIFT), 1000);
  }
}
