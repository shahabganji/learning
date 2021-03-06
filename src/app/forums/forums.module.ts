import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';

import { ForumComponent } from './forum/forum.component';
import { ForumsComponent } from './forums/forums.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadsComponent } from './threads/threads.component';

import { ForumsService } from './services/forums.service';
import { ForumsRoutes } from './forums.routes';

@NgModule({
  declarations: [
    ForumComponent,
    ForumsComponent,
    ThreadComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forChild(),
    ForumsRoutes
  ],
  providers: [
    ForumsService
  ]
})
export class ForumsModule { }
