import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailschercheurComponent } from './detailschercheur.component';

describe('DetailschercheurComponent', () => {
  let component: DetailschercheurComponent;
  let fixture: ComponentFixture<DetailschercheurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailschercheurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailschercheurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
