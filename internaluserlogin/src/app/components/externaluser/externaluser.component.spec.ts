import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternaluserComponent } from './externaluser.component';

describe('ExternaluserComponent', () => {
  let component: ExternaluserComponent;
  let fixture: ComponentFixture<ExternaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
