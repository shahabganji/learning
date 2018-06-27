import { Routes, RouterModule } from '@angular/router';
import { ForumsComponent } from './forums/forums.component';
import { ForumComponent } from './forum/forum.component';

const forumsRoutes: Routes = [
  { path: 'forums', component: ForumsComponent },
  { path: 'forums/:forum_alias', component: ForumComponent }
];

export const ForumsRoutes = RouterModule.forChild(forumsRoutes);
