import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchercheurComponent } from './allchercheur.component';

describe('AllchercheurComponent', () => {
  let component: AllchercheurComponent;
  let fixture: ComponentFixture<AllchercheurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllchercheurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllchercheurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
