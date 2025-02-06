import { Component, EventEmitter, Output } from '@angular/core';
import { ENUM_CELEBRATION_STEPS } from '../../constants';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-gift',
  imports: [LottieComponent, NgIf],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss'
})
export class GiftComponent {
  @Output() onClickGift = new EventEmitter<ENUM_CELEBRATION_STEPS>();
  optionsExplosion: AnimationOptions = {
    path: 'assets/lottie/explosion.json',
    loop: false
  };
  optionsExplosion2: AnimationOptions = {
    path: 'assets/lottie/explosion2.json',
    loop: false
  };
  isClickedGift: boolean = false;
  ENUM_CELEBRATION_STEPS = ENUM_CELEBRATION_STEPS;

  onClick() {
    const giftDocument = document.getElementById('gift');
    if (!giftDocument) return;
    this.isClickedGift = true;
    giftDocument.classList.add('exit');
    setTimeout(() => this.onClickGift.emit(ENUM_CELEBRATION_STEPS.GIFT), 2000);
  }
}
