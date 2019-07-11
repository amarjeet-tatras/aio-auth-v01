import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonResetPasswordComponent } from './ion-reset-password.component';

describe('IonResetPasswordComponent', () => {
  let component: IonResetPasswordComponent;
  let fixture: ComponentFixture<IonResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
