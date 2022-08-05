import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsforgotComponent } from './detailsforgot.component';

describe('DetailsforgotComponent', () => {
  let component: DetailsforgotComponent;
  let fixture: ComponentFixture<DetailsforgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsforgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsforgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
