import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ENUM_CELEBRATION_STEPS } from './constants';
import { CelebrationExternal, CelebrationService } from '../../api/celebration.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-celebration',
  imports: [NgIf, MatProgressSpinnerModule, PresentationComponent, MatIconModule],
  templateUrl: './celebration.component.html',
  styleUrl: './celebration.component.scss'
})
export class CelebrationComponent implements OnInit, OnDestroy {
  ENUM_CELEBRATION_STEPS = ENUM_CELEBRATION_STEPS;
  currentScreen: ENUM_CELEBRATION_STEPS = ENUM_CELEBRATION_STEPS.PRESENTATION;
  celebrationData: Omit<CelebrationExternal, 'youtubeUrl'> & { youtubeUrl: SafeResourceUrl } | undefined;
  isLoadingOnStart: boolean = true;

  constructor(
    private renderer: Renderer2, 
    private router: ActivatedRoute,
    private celebrationService: CelebrationService,
    private sanitizer: DomSanitizer
  ) {}

  getCelebrationById(id: string) {
    this.celebrationService.getById(id)
      .subscribe({
        next: (value) => {
          this.celebrationData = value.celebration;
          this.celebrationData.youtubeUrl = 
          this.sanitizer.bypassSecurityTrustResourceUrl(value.celebration.youtubeUrl.replace('watch?v=', 'embed/') + '?&autoplay=1');
          this.isLoadingOnStart = false;
        },
        error: (error) => {
          alert('Erro ao obter celebração.');
        }
      });
  }

  defineCelebrationId() {
    const celebrationID = this.router.snapshot.paramMap.get("id") || undefined;
    if (!celebrationID) return;
    this.getCelebrationById(celebrationID);
  }

  handleScreenNext() {
    switch (this.currentScreen) {
      case ENUM_CELEBRATION_STEPS.PRESENTATION:
        this.currentScreen = ENUM_CELEBRATION_STEPS.WINNER_INFO;
        break;
      case ENUM_CELEBRATION_STEPS.WINNER_INFO:
        this.currentScreen = ENUM_CELEBRATION_STEPS.SPECIAL_MESSAGE_WITH_TITLE;
        break;
      case ENUM_CELEBRATION_STEPS.SPECIAL_MESSAGE_WITH_TITLE:
        this.currentScreen = ENUM_CELEBRATION_STEPS.END
        break;
      default:
        break;
    }
  }

  handleScreenBack() {
    switch (this.currentScreen) {
      case ENUM_CELEBRATION_STEPS.END:
        this.currentScreen = ENUM_CELEBRATION_STEPS.SPECIAL_MESSAGE_WITH_TITLE
        break;
      case ENUM_CELEBRATION_STEPS.SPECIAL_MESSAGE_WITH_TITLE:
        this.currentScreen = ENUM_CELEBRATION_STEPS.WINNER_INFO
        break;
      case ENUM_CELEBRATION_STEPS.WINNER_INFO:
        this.currentScreen = ENUM_CELEBRATION_STEPS.PRESENTATION
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.defineCelebrationId();
    this.renderer.addClass(document.body, 'celebration');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'celebration');
  }
}
