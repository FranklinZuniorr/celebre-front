import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ENUM_CELEBRATION_STEPS } from './constants';
import { CelebrationExternal, CelebrationService } from '../../api/celebration.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-celebration',
  imports: [NgIf, MatProgressSpinnerModule],
  templateUrl: './celebration.component.html',
  styleUrl: './celebration.component.scss'
})
export class CelebrationComponent implements OnInit, OnDestroy {
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

  ngOnInit() {
    this.defineCelebrationId();
    this.renderer.addClass(document.body, 'celebration');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'celebration');
  }
}
