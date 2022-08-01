import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadusersComponent } from './downloadusers.component';

describe('DownloadusersComponent', () => {
  let component: DownloadusersComponent;
  let fixture: ComponentFixture<DownloadusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
