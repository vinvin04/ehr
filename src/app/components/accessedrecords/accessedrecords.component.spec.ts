import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessedrecordsComponent } from './accessedrecords.component';

describe('AccessedrecordsComponent', () => {
  let component: AccessedrecordsComponent;
  let fixture: ComponentFixture<AccessedrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessedrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessedrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
