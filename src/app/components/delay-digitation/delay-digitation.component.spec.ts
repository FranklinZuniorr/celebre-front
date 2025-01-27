import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayDigitationComponent } from './delay-digitation.component';

describe('DelayDigitationComponent', () => {
  let component: DelayDigitationComponent;
  let fixture: ComponentFixture<DelayDigitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayDigitationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayDigitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
