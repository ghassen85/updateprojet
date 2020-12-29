import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginexpertComponent } from './loginexpert.component';

describe('LoginexpertComponent', () => {
  let component: LoginexpertComponent;
  let fixture: ComponentFixture<LoginexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginexpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
