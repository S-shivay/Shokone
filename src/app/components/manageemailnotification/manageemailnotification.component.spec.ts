import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageemailnotificationComponent } from './manageemailnotification.component';

describe('ManageemailnotificationComponent', () => {
  let component: ManageemailnotificationComponent;
  let fixture: ComponentFixture<ManageemailnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageemailnotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageemailnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
