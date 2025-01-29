import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsGenericSuggestionsComponent } from './options-generic-suggestions.component';

describe('OptionsGenericSuggestionsComponent', () => {
  let component: OptionsGenericSuggestionsComponent;
  let fixture: ComponentFixture<OptionsGenericSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsGenericSuggestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsGenericSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
