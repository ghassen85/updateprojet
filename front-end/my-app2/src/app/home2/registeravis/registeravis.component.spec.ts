import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteravisComponent } from './registeravis.component';

describe('RegisteravisComponent', () => {
  let component: RegisteravisComponent;
  let fixture: ComponentFixture<RegisteravisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteravisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteravisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
