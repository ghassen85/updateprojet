import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpapierComponent } from './allpapier.component';

describe('AllpapierComponent', () => {
  let component: AllpapierComponent;
  let fixture: ComponentFixture<AllpapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
