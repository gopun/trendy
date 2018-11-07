import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ChatMessageModelPage } from '../chat-message-model/chat-message-model.page';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  voteUsers = [{
    comment: "this or that",
    username: "test1",
    followStatus: 1,
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  }, {
    comment: "this or that",
    username: "test2",
    followStatus: 0,
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  }, {
    comment: "this or that",
    username: "testUseer1",
    followStatus: 1,
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  }, {
    comment: "this or that",
    username: "testUseer2",
    followStatus: 0,
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  }, {
    comment: "this or that",
    username: "testUseer3",
    followStatus: 1,
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  },];

  constructor(private modalController: ModalController) { }

  async openChatModel(id) {
    const modal = await this.modalController.create({
      component: ChatMessageModelPage,
      componentProps: {
        user: id
      }
    });
    await modal.present();
  }

  ngOnInit() { }
}
