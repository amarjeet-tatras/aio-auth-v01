import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaLoginComponent } from './insta-login.component';

describe('InstaLoginComponent', () => {
  let component: InstaLoginComponent;
  let fixture: ComponentFixture<InstaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
