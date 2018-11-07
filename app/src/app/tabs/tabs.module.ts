import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { ChatPageModule } from '../chat/chat.module';
import { HomePageModule } from '../home/home.module';
import { FriendsPageModule } from '../friends/friends.module';
import { ProfilePageModule } from '../profile/profile.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ChatPageModule,
    ContactPageModule,
    FriendsPageModule,
    ProfilePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
