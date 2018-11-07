import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import * as _ from 'lodash';

@Component({
  selector: 'app-chat-message-model',
  templateUrl: './chat-message-model.page.html',
  styleUrls: ['./chat-message-model.page.scss'],
})
export class ChatMessageModelPage implements OnInit {
  @ViewChild('chatContent') content;

  user = null;
  chats = [{
    comment: "123456xfzdfgsdfggsdgbsdgbsdg estdb sedtb se tdz gsrtgd xtshsndnsgrd",
    username: "user1",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-11-06T16:05:15.826Z",
    userid: 1
  }, {
    comment: "654321",
    username: "user2",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-10-05T16:05:15.826Z",
    userid: 2
  }, {
    comment: "789",
    username: "user3",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-11-01T16:05:15.826Z",
    userid: 1
  }, {
    comment: "987",
    username: "user4",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-11-04T16:05:15.826Z",
    userid: 2
  }, {
    comment: "000",
    username: "user5",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-11-05T16:05:15.826Z",
    userid: 1
  },];

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.user = this.navParams.get('user');
    this.chats = _.sortBy(this.chats, 'createdAt');
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }
}
