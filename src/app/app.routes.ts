import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuardService } from './services/auth-guard.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'users', component: ChatListComponent, outlet: 'chat', canActivate: [AuthGuardService] },
  { path: 'users/:username', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuardService] },

  { path: 'blogs', loadChildren: 'src/app/blogs/blogs.module#BlogsModule' },

  { path: '', redirectTo: '/forums', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);

