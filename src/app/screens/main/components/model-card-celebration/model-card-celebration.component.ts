import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateNewCelebrationParams } from '../../../../api/checkout.service';
import { NgStyle } from '@angular/common';

export interface ModelCardCelebrationProps {
  title: string;
  backgroundImage: string;
  celebrationData: CreateNewCelebrationParams;
}

@Component({
  selector: 'app-model-card-celebration',
  imports: [NgStyle],
  templateUrl: './model-card-celebration.component.html',
  styleUrl: './model-card-celebration.component.scss'
})
export class ModelCardCelebrationComponent {
  @Input() infos!: ModelCardCelebrationProps;
  @Output() onClickCard: EventEmitter<CreateNewCelebrationParams> = new EventEmitter<CreateNewCelebrationParams>();

  handleOnClickCard() {
    this.onClickCard.emit(this.infos.celebrationData);
  }
}
