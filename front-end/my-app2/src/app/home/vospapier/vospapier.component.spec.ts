import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VospapierComponent } from './vospapier.component';

describe('VospapierComponent', () => {
  let component: VospapierComponent;
  let fixture: ComponentFixture<VospapierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VospapierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VospapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
