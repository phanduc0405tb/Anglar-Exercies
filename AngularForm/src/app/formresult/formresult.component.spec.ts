import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormresultComponent } from './formresult.component';

describe('FormresultComponent', () => {
  let component: FormresultComponent;
  let fixture: ComponentFixture<FormresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
