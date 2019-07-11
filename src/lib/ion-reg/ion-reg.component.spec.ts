import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonRegComponent } from './ion-reg.component';

describe('IonRegComponent', () => {
  let component: IonRegComponent;
  let fixture: ComponentFixture<IonRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
