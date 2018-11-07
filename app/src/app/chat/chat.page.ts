import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import * as _ from 'lodash';
// import * as firebase from 'firebase';
import * as moment from 'moment';

import { environment } from '../../environments/environment';
import { ChatMessageModelPage } from '../chat-message-model/chat-message-model.page';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

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

  constructor(private modalController: ModalController) {
    // firebase.initializeApp(environment.firebaseconfig);
  }

  ngOnInit() {
    // console.log('\n this.cmtItem...', this.cmtItem);
    this.chats = _.sortBy(this.chats, 'createdAt').reverse();
  }

async openChatModel(id) {
  const modal = await this.modalController.create({
    component: ChatMessageModelPage,
    componentProps: {
      user: id
    }
  });
  await modal.present();
}

  parseDate(date) {
    if (moment(date).isSame(moment().clone().startOf('day'), 'd')) {
      return moment(date).format('h:mm a');
    } else if (moment(date).isSame(moment().clone().subtract(1, 'days').startOf('day'), 'd')) {
      return 'Yesterday';
    } else {
      return moment(date).format('L');
    }
  }
}
