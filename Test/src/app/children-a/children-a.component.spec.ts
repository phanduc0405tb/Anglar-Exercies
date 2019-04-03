import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenAComponent } from './children-a.component';

describe('ChildrenAComponent', () => {
  let component: ChildrenAComponent;
  let fixture: ComponentFixture<ChildrenAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
