import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonLoginComponent } from './ion-login.component';

describe('IonLoginComponent', () => {
  let component: IonLoginComponent;
  let fixture: ComponentFixture<IonLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
