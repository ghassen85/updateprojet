import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterediteurComponent } from './registerediteur.component';

describe('RegisterediteurComponent', () => {
  let component: RegisterediteurComponent;
  let fixture: ComponentFixture<RegisterediteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterediteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
