import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCelebrationComponent } from './form-new-celebration.component';

describe('FormNewCelebrationComponent', () => {
  let component: FormNewCelebrationComponent;
  let fixture: ComponentFixture<FormNewCelebrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewCelebrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewCelebrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
