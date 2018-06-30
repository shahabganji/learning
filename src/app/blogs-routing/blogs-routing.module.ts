import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogsRoutes } from './blogs.routes';


@NgModule({
  imports: [BlogsRoutes],
  exports: [RouterModule],
  providers: []
})
export class BlogsRoutingModule { }
