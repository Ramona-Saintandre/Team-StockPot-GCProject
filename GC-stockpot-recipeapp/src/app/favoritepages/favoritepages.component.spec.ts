import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritepagesComponent } from './favoritepages.component';

describe('FavoritepagesComponent', () => {
  let component: FavoritepagesComponent;
  let fixture: ComponentFixture<FavoritepagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritepagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
