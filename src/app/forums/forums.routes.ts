import { Routes, RouterModule } from '@angular/router';
import { ForumsComponent } from './forums/forums.component';

const forumsRoutes: Routes = [
  { path: 'forums', component: ForumsComponent }
];

export const ForumsRoutes = RouterModule.forChild(forumsRoutes);
