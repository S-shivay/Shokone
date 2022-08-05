import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountexternalComponent } from './accountexternal.component';

describe('AccountexternalComponent', () => {
  let component: AccountexternalComponent;
  let fixture: ComponentFixture<AccountexternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountexternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountexternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
