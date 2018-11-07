import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CommentModelPage } from '../comment-model/comment-model.page';
import { VotesModelPage } from '../votes-model/votes-model.page';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
@ViewChild('Trendycontents') trendycontent;

  items = [{
    title: "this or that",
    image1: "https://i.stack.imgur.com/zRY3x.gif",
    image2: "https://i.stack.imgur.com/zRY3x.gif",
    img1votes: 0,
    img2votes: 90,
    totalvotes: 90,
    comments: 90,
  }, {
    title: "this or that",
    image1: "https://i.stack.imgur.com/zRY3x.gif",
    image2: "https://user-images.githubusercontent.com/315119/41051480-8b509f48-69b6-11e8-80df-1b02b8e50827.png",
    img1votes: 50,
    img2votes: 50,
    totalvotes: 100
  }, {
    title: "this or that",
    image1: "https://i.stack.imgur.com/zRY3x.gif",
    image2: "https://user-images.githubusercontent.com/315119/41051480-8b509f48-69b6-11e8-80df-1b02b8e50827.png",
    img1votes: 70,
    img2votes: 20,
    totalvotes: 90
  }, {
    title: "this or that",
    image1: "https://i.stack.imgur.com/zRY3x.gif",
    image2: "https://user-images.githubusercontent.com/315119/41051480-8b509f48-69b6-11e8-80df-1b02b8e50827.png",
    img1votes: 40,
    img2votes: 60,
    totalvotes: 100
  }, {
    title: "this or that",
    image1: "https://i.stack.imgur.com/zRY3x.gif",
    image2: "https://user-images.githubusercontent.com/315119/41051480-8b509f48-69b6-11e8-80df-1b02b8e50827.png",
    img1votes: 60,
    img2votes: 40,
    totalvotes: 100
  }, {
    title: "this or that",
    image1: "https://i.stack.imgur.com/zRY3x.gif",
    image2: "https://user-images.githubusercontent.com/315119/41051480-8b509f48-69b6-11e8-80df-1b02b8e50827.png",
    img1votes: 10,
    img2votes: 70,
    totalvotes: 80
  }];

  constructor(private modalController: ModalController) {
    console.log('\n environment...', environment.server)
  }

  async commentModel(id) {
    const modal = await this.modalController.create({
      component: CommentModelPage,
      componentProps: {
        cmtItem: id
      }
    });
    await modal.present();
  }

  async votesModel(id) {
    const modal = await this.modalController.create({
      component: VotesModelPage,
      componentProps: {
        cmtItem: id
      }
    });
    await modal.present();
  }

  async shareModel(id) {
    // const modal = await this.modalController.create({
    //   component: VotesModelPage,
    //   componentProps: {
    //     cmtItem: id
    //   }
    // });
    // await modal.present();
  }

  doInfinite(infiniteScroll) {
    this.items = this.items.concat(this.items);
    infiniteScroll.target.complete();
  }

  addPercent(image, item, id) {
    item.imgvoted = true;
    item.totalvotes += 1;
    if (image == 1) {
      item.img1votes += 1;
      item.img1percent = this.roundNum((item.img1votes * 100) / item.totalvotes);
      item.img1LowActive = (item.img1percent < 50) ? true : false;
      item.img1voted = true;
      item.img1lineHeight = this.roundNum(this.percentToPixel(item.img1percent)) * 2;
      item.circleTop = item.img1lineHeight - 240;
      item.img2percent = this.roundNum((item.img2votes * 100) / item.totalvotes);
      item.img2LowActive = (item.img2percent < 50) ? true : false;
      item.img2lineHeight = this.roundNum(this.percentToPixel(item.img2percent)) * 2;
    } else {
      item.img2votes += 1;
      item.img2percent = this.roundNum((item.img2votes * 100) / item.totalvotes);
      item.img2LowActive = (item.img2percent < 50) ? true : false;
      item.img2voted = true;
      item.img2lineHeight = this.roundNum(this.percentToPixel(item.img2percent)) * 2;
      item.circleTop = item.img2lineHeight - 240;
      item.img1percent = this.roundNum((item.img1votes * 100) / item.totalvotes);
      item.img1LowActive = (item.img1percent < 50) ? true : false;
      item.img1lineHeight = this.roundNum(this.percentToPixel(item.img1percent)) * 2;
    }
    let rect = document.getElementById('Trendycontents'+id).offsetTop;
    this.trendycontent.scrollToPoint(0, rect, 2000);
  }

  roundNum(num) {
    return (num - Math.floor(num)) > 0.5 ? Math.ceil(num) : Math.floor(num);
  }
  percentToPixel(percent) {
    return ((percent / 100) * (100 - 1)) + 1;
  }
}
