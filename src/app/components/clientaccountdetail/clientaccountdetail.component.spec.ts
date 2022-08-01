import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientaccountdetailComponent } from './clientaccountdetail.component';

describe('ClientaccountdetailComponent', () => {
  let component: ClientaccountdetailComponent;
  let fixture: ComponentFixture<ClientaccountdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientaccountdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientaccountdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
