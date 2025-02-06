import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-end',
  imports: [LottieComponent],
  templateUrl: './end.component.html',
  styleUrl: './end.component.scss'
})
export class EndComponent {
  @Input() title: string = '';
  @Input() endPhrase: string = '';
  @Input() youtubeUrl: SafeResourceUrl = '';
  optionsFireworks: AnimationOptions = {
    path: 'assets/lottie/firework.json',
  };
  optionsFireworkConfetties: AnimationOptions = {
    path: 'assets/lottie/firework-confetti.json',
  };
}
