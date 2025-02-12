import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormNewCelebrationComponent } from './components/form-new-celebration/form-new-celebration.component';
import { DelayDigitationComponent } from '../../components/delay-digitation/delay-digitation.component';
import { ENUM_MAIN_AREAS } from './constants';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Option } from '../../types';
import { ModelCardCelebrationComponent, ModelCardCelebrationProps } from './components/model-card-celebration/model-card-celebration.component';
import { CreateNewCelebrationParams } from '../../api/checkout.service';

@Component({
  selector: 'app-main',
  imports: [FormNewCelebrationComponent, DelayDigitationComponent, ModelCardCelebrationComponent, NgIf, NgFor, NgStyle],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {
  ENUM_MAIN_AREAS = ENUM_MAIN_AREAS;
  currentArea: ENUM_MAIN_AREAS = ENUM_MAIN_AREAS.GENERAL;
  currentSelectedModel: CreateNewCelebrationParams | undefined = undefined;
  optionsTap: Option[] = [
    {text: 'Geral', value: ENUM_MAIN_AREAS.GENERAL},
    {text: 'Modelos', value: ENUM_MAIN_AREAS.MODELS},
  ];
  optionsModel: ModelCardCelebrationProps[] = [
    { 
      title: 'Carnaval', 
      backgroundImage: 'https://t3.ftcdn.net/jpg/03/10/03/20/360_F_310032026_jq6nyLbIoG9HeZPp2EePPIsNLzOPZsd8.jpg', 
      celebrationData: {
        celebrationTitle: 'teste',
        description: 'teste teste',
        email: 'teste@gmail.com',
        endPhrase: 'teste teste teste',
        imageLink: 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar-em-estilo-plano-ilustracao-vetorial-de-perfil-de-usuario-masculino-em-fundo-isolado-conceito-de-negocio-de-sinal-de-perfil-masculino_157943-38764.jpg?semt=ais_hybrid',
        personName: 'teste teste',
        youtubeUrl: 'https://www.youtube.com/watch?v=-RbeVRFaV3I'
      }
    }
  ]

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
