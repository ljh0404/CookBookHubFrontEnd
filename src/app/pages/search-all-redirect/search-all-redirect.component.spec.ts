import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllRedirectComponent } from './search-all-redirect.component';

describe('SearchAllRedirectComponent', () => {
  let component: SearchAllRedirectComponent;
  let fixture: ComponentFixture<SearchAllRedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAllRedirectComponent]
    });
    fixture = TestBed.createComponent(SearchAllRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
