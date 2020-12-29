import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllavisComponent } from './allavis.component';

describe('AllavisComponent', () => {
  let component: AllavisComponent;
  let fixture: ComponentFixture<AllavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllavisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
