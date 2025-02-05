import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-end',
  imports: [],
  templateUrl: './end.component.html',
  styleUrl: './end.component.scss'
})
export class EndComponent {
  @Input() title: string = '';
  @Input() endPhrase: string = '';
  @Input() youtubeUrl: SafeResourceUrl = '';
}
