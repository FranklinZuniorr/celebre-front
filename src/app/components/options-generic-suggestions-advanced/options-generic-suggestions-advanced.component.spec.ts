import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsGenericSuggestionsAdvancedComponent } from './options-generic-suggestions-advanced.component';

describe('OptionsGenericSuggestionsAdvancedComponent', () => {
  let component: OptionsGenericSuggestionsAdvancedComponent;
  let fixture: ComponentFixture<OptionsGenericSuggestionsAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsGenericSuggestionsAdvancedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsGenericSuggestionsAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
