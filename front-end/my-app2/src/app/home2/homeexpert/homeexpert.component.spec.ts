import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeexpertComponent } from './homeexpert.component';

describe('HomeexpertComponent', () => {
  let component: HomeexpertComponent;
  let fixture: ComponentFixture<HomeexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeexpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
