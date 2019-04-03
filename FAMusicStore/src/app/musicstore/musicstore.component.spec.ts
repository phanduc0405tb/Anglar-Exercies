import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicstoreComponent } from './musicstore.component';

describe('MusicstoreComponent', () => {
  let component: MusicstoreComponent;
  let fixture: ComponentFixture<MusicstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
