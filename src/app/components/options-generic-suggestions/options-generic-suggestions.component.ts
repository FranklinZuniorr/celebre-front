import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-generic-suggestions',
  imports: [NgFor],
  templateUrl: './options-generic-suggestions.component.html',
  styleUrl: './options-generic-suggestions.component.scss'
})
export class OptionsGenericSuggestionsComponent {
  @Input() options: string[] = [];
  @Input() onSelect: (value: string) => void = () => null;

  handleOnSelect(value: string) {
    this.onSelect(value);
  }
}
