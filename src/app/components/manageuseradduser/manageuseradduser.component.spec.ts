import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuseradduserComponent } from './manageuseradduser.component';

describe('ManageuseradduserComponent', () => {
  let component: ManageuseradduserComponent;
  let fixture: ComponentFixture<ManageuseradduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageuseradduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageuseradduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
