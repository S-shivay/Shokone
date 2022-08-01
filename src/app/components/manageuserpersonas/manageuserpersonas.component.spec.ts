import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuserpersonasComponent } from './manageuserpersonas.component';

describe('ManageuserpersonasComponent', () => {
  let component: ManageuserpersonasComponent;
  let fixture: ComponentFixture<ManageuserpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageuserpersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageuserpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
