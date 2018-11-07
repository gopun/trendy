import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentModelPage } from './comment-model.page';

describe('CommentModelPage', () => {
  let component: CommentModelPage;
  let fixture: ComponentFixture<CommentModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
