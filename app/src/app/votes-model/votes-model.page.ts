import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-votes-model',
  templateUrl: './votes-model.page.html',
  styleUrls: ['./votes-model.page.scss'],
})
export class VotesModelPage implements OnInit {

  cmtItem = null;
  voteUsers = [{
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  }, {
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  }, {
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  }, {
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  }, {
    comment: "this or that",
    username: "testUseer",
    userimage: "https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg",
    createdAt: new Date().toISOString()
  },];

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.cmtItem = this.navParams.get('cmtItem');
    console.log('\n this.cmtItem...', this.cmtItem)
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
