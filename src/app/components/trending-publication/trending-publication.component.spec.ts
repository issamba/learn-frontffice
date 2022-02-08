import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPublicationComponent } from './trending-publication.component';

describe('TrendingPublicationComponent', () => {
  let component: TrendingPublicationComponent;
  let fixture: ComponentFixture<TrendingPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
