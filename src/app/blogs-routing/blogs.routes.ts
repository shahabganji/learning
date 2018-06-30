import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from '../blogs/blogs/blogs.component';
import { BlogComponent } from '../blogs/blog/blog.component';




const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: ':post_id', component: BlogComponent },
];

export const BlogsRoutes = RouterModule.forChild(routes);
