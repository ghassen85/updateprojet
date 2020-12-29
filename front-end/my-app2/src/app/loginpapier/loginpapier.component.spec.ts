import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpapierComponent } from './loginpapier.component';

describe('LoginpapierComponent', () => {
  let component: LoginpapierComponent;
  let fixture: ComponentFixture<LoginpapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
