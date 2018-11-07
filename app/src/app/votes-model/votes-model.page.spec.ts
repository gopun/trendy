import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesModelPage } from './votes-model.page';

describe('VotesModelPage', () => {
  let component: VotesModelPage;
  let fixture: ComponentFixture<VotesModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
