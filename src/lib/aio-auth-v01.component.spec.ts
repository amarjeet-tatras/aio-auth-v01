import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AioAuthV01Component } from './aio-auth-v01.component';

describe('AioAuthV01Component', () => {
  let component: AioAuthV01Component;
  let fixture: ComponentFixture<AioAuthV01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AioAuthV01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AioAuthV01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
