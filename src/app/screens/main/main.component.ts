import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormNewCelebrationComponent } from './components/form-new-celebration/form-new-celebration.component';
import { DelayDigitationComponent } from '../../components/delay-digitation/delay-digitation.component';

@Component({
  selector: 'app-main',
  imports: [FormNewCelebrationComponent, DelayDigitationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'appMain');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'appMain');
  }
}
