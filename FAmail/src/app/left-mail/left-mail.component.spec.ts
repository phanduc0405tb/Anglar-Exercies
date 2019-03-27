import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMailComponent } from './left-mail.component';

describe('LeftMailComponent', () => {
  let component: LeftMailComponent;
  let fixture: ComponentFixture<LeftMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
