import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCardCelebrationComponent } from './model-card-celebration.component';

describe('ModelCardCelebrationComponent', () => {
  let component: ModelCardCelebrationComponent;
  let fixture: ComponentFixture<ModelCardCelebrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelCardCelebrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelCardCelebrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
