import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaMailComponent } from './fa-mail.component';

describe('FaMailComponent', () => {
  let component: FaMailComponent;
  let fixture: ComponentFixture<FaMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
