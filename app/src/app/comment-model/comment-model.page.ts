import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import * as _ from 'lodash';

@Component({
  selector: 'app-comment-model',
  templateUrl: './comment-model.page.html',
  styleUrls: ['./comment-model.page.scss'],
})
export class CommentModelPage implements OnInit {
  @ViewChild('Content') content;

  cmtItem = null;
  comments = [{
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-11-05T16:05:15.826Z"
  }, {
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-10-05T16:05:15.826Z"
  }, {
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-11-02T16:05:15.826Z"
  }, {
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-11-04T16:05:15.826Z"
  }, {
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: "2018-11-05T16:05:15.826Z"
  },];

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.cmtItem = this.navParams.get('cmtItem');
    this.comments = _.sortBy(this.comments, 'createdAt');
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
