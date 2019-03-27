import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMailComponent } from './right-mail.component';

describe('RightMailComponent', () => {
  let component: RightMailComponent;
  let fixture: ComponentFixture<RightMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
