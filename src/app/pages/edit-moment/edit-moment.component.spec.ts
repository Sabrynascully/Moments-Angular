/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditMomentComponent } from './edit-moment.component';

describe('EditMomentComponent', () => {
  let component: EditMomentComponent;
  let fixture: ComponentFixture<EditMomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
