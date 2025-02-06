import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ENUM_CELEBRATION_STEPS } from './constants';
import { CelebrationExternal, CelebrationService } from '../../api/celebration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MatIconModule } from '@angular/material/icon';
import { WinnerInfoComponent } from './components/winner-info/winner-info.component';
import { SpecialMessageComponent } from './components/special-message/special-message.component';
import { EndComponent } from './components/end/end.component';
import { GiftComponent } from './components/gift/gift.component';
import { BalloonsComponent } from './components/balloons/balloons.component';

@Component({
  selector: 'app-celebration',
  imports: [
    NgIf, 
    MatProgressSpinnerModule, 
    PresentationComponent, 
    MatIconModule, 
    WinnerInfoComponent,
    SpecialMessageComponent,
    EndComponent,
    NgStyle,
    GiftComponent,
    BalloonsComponent
  ],
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
    private navigation: Router,
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

  handleNavigateToHome() {
    this.navigation.navigate(['/']);
  }

  handleScreenNext(screen?: ENUM_CELEBRATION_STEPS) {
    const currentScreen = screen || this.currentScreen;
    switch (currentScreen) {
      case ENUM_CELEBRATION_STEPS.PRESENTATION:
        this.currentScreen = ENUM_CELEBRATION_STEPS.GIFT;
        break;
      case ENUM_CELEBRATION_STEPS.GIFT:
        this.currentScreen = ENUM_CELEBRATION_STEPS.WINNER_INFO;
        break;
      case ENUM_CELEBRATION_STEPS.WINNER_INFO:
        this.currentScreen = ENUM_CELEBRATION_STEPS.SPECIAL_MESSAGE_WITH_TITLE;
        break;
      case ENUM_CELEBRATION_STEPS.SPECIAL_MESSAGE_WITH_TITLE:
        this.currentScreen = ENUM_CELEBRATION_STEPS.BALLOONS;
        break;
      case ENUM_CELEBRATION_STEPS.BALLOONS:
        this.currentScreen = ENUM_CELEBRATION_STEPS.END;
        break;
      default:
        break;
    }
  }

  handleScreenBack() {
    switch (this.currentScreen) {
      case ENUM_CELEBRATION_STEPS.END:
        this.currentScreen = ENUM_CELEBRATION_STEPS.SPECIAL_MESSAGE_WITH_TITLE;
        break;
      case ENUM_CELEBRATION_STEPS.BALLOONS:
        this.currentScreen = ENUM_CELEBRATION_STEPS.SPECIAL_MESSAGE_WITH_TITLE;
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
