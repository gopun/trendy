import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MomentModule } from 'angular2-moment';

import { CommentModelPage } from './comment-model.page';

const routes: Routes = [
  {
    path: '',
    component: CommentModelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MomentModule
  ],
  declarations: [CommentModelPage]
})
export class CommentModelPageModule {}
