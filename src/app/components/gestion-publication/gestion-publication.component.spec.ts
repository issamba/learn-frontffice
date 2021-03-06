import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPublicationComponent } from './gestion-publication.component';

describe('GestionPublicationComponent', () => {
  let component: GestionPublicationComponent;
  let fixture: ComponentFixture<GestionPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
