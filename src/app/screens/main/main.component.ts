import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormNewCelebrationComponent } from './components/form-new-celebration/form-new-celebration.component';
import { DelayDigitationComponent } from '../../components/delay-digitation/delay-digitation.component';
import { ENUM_MAIN_AREAS, optionsModel } from './constants';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Option } from '../../types';
import { ModelCardCelebrationComponent, ModelCardCelebrationProps } from './components/model-card-celebration/model-card-celebration.component';
import { CreateNewCelebrationParams } from '../../api/checkout.service';
import { ENUM_CELEBRATION_STEPS } from '../celebration/constants';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  imports: [
    FormNewCelebrationComponent, 
    DelayDigitationComponent, 
    ModelCardCelebrationComponent, 
    NgIf, 
    NgFor, 
    NgStyle,
    MatIconModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {
  ENUM_MAIN_AREAS = ENUM_MAIN_AREAS;
  currentArea: ENUM_MAIN_AREAS = ENUM_MAIN_AREAS.GENERAL;
  currentSelectedModel: CreateNewCelebrationParams | undefined = undefined;
  optionsTap: Option<ENUM_MAIN_AREAS>[] = [
    {text: 'Geral', value: ENUM_MAIN_AREAS.GENERAL},
    {text: 'Modelos', value: ENUM_MAIN_AREAS.MODELS},
  ];
  optionsModel: ModelCardCelebrationProps[] = optionsModel;
  optionsModelIcons: Record<ENUM_MAIN_AREAS, string> = {
    [ENUM_MAIN_AREAS.GENERAL]: 'edit',
    [ENUM_MAIN_AREAS.MODELS]: 'format_list_bulleted'
  }

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

  handleSelectModel(value: CreateNewCelebrationParams) {
    this.currentSelectedModel = value;
    this.handleChangeCurrentArea(ENUM_MAIN_AREAS.GENERAL);
  }
}
