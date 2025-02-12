import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormNewCelebrationComponent } from './components/form-new-celebration/form-new-celebration.component';
import { DelayDigitationComponent } from '../../components/delay-digitation/delay-digitation.component';
import { ENUM_MAIN_AREAS } from './constants';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Option } from '../../types';

@Component({
  selector: 'app-main',
  imports: [FormNewCelebrationComponent, DelayDigitationComponent, NgIf, NgFor, NgStyle],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {
  ENUM_MAIN_AREAS = ENUM_MAIN_AREAS;
  currentArea: ENUM_MAIN_AREAS = ENUM_MAIN_AREAS.GENERAL;
  optionsTap: Option[] = [
    {text: 'Geral', value: ENUM_MAIN_AREAS.GENERAL},
    {text: 'Modelos', value: ENUM_MAIN_AREAS.MODELS},
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'appMain');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'appMain');
  }

  handleChangeCurrentArea(value: ENUM_MAIN_AREAS) {
    this.currentArea = value;
  }
}
