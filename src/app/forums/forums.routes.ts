import { Routes, RouterModule } from '@angular/router';
import { ForumsComponent } from './forums/forums.component';
import { ForumComponent } from './forum/forum.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadComponent } from './thread/thread.component';

const forumsRoutes: Routes = [
  { path: 'forums', component: ForumsComponent },
  {
    path: 'forums/:forum_alias', component: ForumComponent,
    children: [
      { path: '', component: ThreadsComponent },
      { path: ':thread_alias', component: ThreadComponent }
    ]
  }
];

export const ForumsRoutes = RouterModule.forChild(forumsRoutes);
