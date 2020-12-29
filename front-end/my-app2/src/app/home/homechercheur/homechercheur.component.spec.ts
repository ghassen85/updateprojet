import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechercheurComponent } from './homechercheur.component';

describe('HomechercheurComponent', () => {
  let component: HomechercheurComponent;
  let fixture: ComponentFixture<HomechercheurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomechercheurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomechercheurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
