import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleItemCardComponent } from './people-item-card.component';

describe('PeopleItemCardComponent', () => {
  let component: PeopleItemCardComponent;
  let fixture: ComponentFixture<PeopleItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
