import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Option } from '../../types';

@Component({
  selector: 'app-options-generic-suggestions-advanced',
  imports: [NgFor],
  templateUrl: './options-generic-suggestions-advanced.component.html',
  styleUrl: './options-generic-suggestions-advanced.component.scss'
})
export class OptionsGenericSuggestionsAdvancedComponent {
  @Input() options: Option[] = [];
  @Input() onSelect: (value: Option) => void = () => null;

  handleOnSelect(value: Option) {
    this.onSelect(value);
  }
}
