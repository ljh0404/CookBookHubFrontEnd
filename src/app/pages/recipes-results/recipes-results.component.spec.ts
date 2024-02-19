import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesResultsComponent } from './recipes-results.component';

describe('RecipesResultsComponent', () => {
  let component: RecipesResultsComponent;
  let fixture: ComponentFixture<RecipesResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesResultsComponent]
    });
    fixture = TestBed.createComponent(RecipesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
