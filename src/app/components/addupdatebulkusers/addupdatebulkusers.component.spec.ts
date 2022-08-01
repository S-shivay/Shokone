import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdatebulkusersComponent } from './addupdatebulkusers.component';

describe('AddupdatebulkusersComponent', () => {
  let component: AddupdatebulkusersComponent;
  let fixture: ComponentFixture<AddupdatebulkusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddupdatebulkusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdatebulkusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
