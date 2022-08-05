import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditforgotComponent } from './editforgot.component';

describe('EditforgotComponent', () => {
  let component: EditforgotComponent;
  let fixture: ComponentFixture<EditforgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditforgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditforgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
