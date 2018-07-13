import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactive2Component } from './add-reactive2.component';

describe('AddReactive2Component', () => {
  let component: AddReactive2Component;
  let fixture: ComponentFixture<AddReactive2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReactive2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReactive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
