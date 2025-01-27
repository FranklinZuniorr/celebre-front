import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delay-digitation',
  imports: [NgFor],
  templateUrl: './delay-digitation.component.html',
  styleUrl: './delay-digitation.component.scss'
})
export class DelayDigitationComponent implements OnInit {
  @Input() text: string = '';
  @Input() delay: number = 100;
  
  typedText: string = '';

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    let index = 0;
    this.typedText = '';

    const typingInterval = setInterval(() => {
      this.typedText += this.text[index];
      index++;

      if (index === this.text.length) {
        clearInterval(typingInterval);
      }
    }, this.delay);
  }
}
