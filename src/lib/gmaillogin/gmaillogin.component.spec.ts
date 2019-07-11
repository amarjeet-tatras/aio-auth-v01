import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailloginComponent } from './gmaillogin.component';

describe('GmailloginComponent', () => {
  let component: GmailloginComponent;
  let fixture: ComponentFixture<GmailloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
