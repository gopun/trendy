import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageModelPage } from './chat-message-model.page';

describe('ChatMessageModelPage', () => {
  let component: ChatMessageModelPage;
  let fixture: ComponentFixture<ChatMessageModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessageModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessageModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
