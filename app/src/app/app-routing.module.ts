import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'comment', loadChildren: './comment-model/comment-model.module#CommentModelPageModule' },
  { path: 'votes', loadChildren: './votes-model/votes-model.module#VotesModelPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'chat-message', loadChildren: './chat-message-model/chat-message-model.module#ChatMessageModelPageModule' },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
