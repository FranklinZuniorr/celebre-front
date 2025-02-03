import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DelayDigitationComponent } from '../../components/delay-digitation/delay-digitation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-pay',
  imports: [DelayDigitationComponent],
  templateUrl: './success-pay.component.html',
  styleUrl: './success-pay.component.scss'
})
export class SuccessPayComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2, private router: Router) {}

  handleOnClickNavigateToMainPage() {
    this.router.navigate(['/']);
  }

  openEmail() {
    window.location.href = 'mailto:';
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'successPay');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'successPay');
  }
}
