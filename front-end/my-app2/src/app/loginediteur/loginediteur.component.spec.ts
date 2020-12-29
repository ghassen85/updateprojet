import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginediteurComponent } from './loginediteur.component';

describe('LoginediteurComponent', () => {
  let component: LoginediteurComponent;
  let fixture: ComponentFixture<LoginediteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginediteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
