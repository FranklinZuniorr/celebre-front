import { Component, EventEmitter, Output } from '@angular/core';
import { ENUM_CELEBRATION_STEPS } from '../../constants';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-balloons',
  imports: [LottieComponent, NgIf],
  templateUrl: './balloons.component.html',
  styleUrl: './balloons.component.scss'
})
export class BalloonsComponent {
  @Output() onDestroyBalloon = new EventEmitter<ENUM_CELEBRATION_STEPS>();
  ENUM_CELEBRATION_STEPS = ENUM_CELEBRATION_STEPS;
  options: AnimationOptions = {
    path: 'assets/lottie/firework.json',
  };
  isClickedBalloon: boolean = false;

  onClickBalloon() {
    const balloonDocument = document.getElementById('balloon');
    const balloonTextDocument = document.getElementById('balloon-text');
    if (!balloonDocument || !balloonTextDocument) return;
    this.isClickedBalloon = true;
    balloonTextDocument.innerText = "COMEMORE!"
    balloonDocument.classList.add('exit');
    balloonTextDocument.classList.add('exit');
    setTimeout(() => this.onDestroyBalloon.emit(ENUM_CELEBRATION_STEPS.BALLOONS), 4000);
  }
}
