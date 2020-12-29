import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeediteurComponent } from './homeediteur.component';

describe('HomeediteurComponent', () => {
  let component: HomeediteurComponent;
  let fixture: ComponentFixture<HomeediteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeediteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
