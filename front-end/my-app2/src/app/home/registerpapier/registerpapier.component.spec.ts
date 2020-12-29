import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpapierComponent } from './registerpapier.component';

describe('RegisterpapierComponent', () => {
  let component: RegisterpapierComponent;
  let fixture: ComponentFixture<RegisterpapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
