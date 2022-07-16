import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { UserType } from './Enums/user-type';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'prijava',
    pathMatch: 'full'
  },
  {
    path: 'prijava',
    component: LoginComponent
  },
  
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      USER_TYPE: UserType.ADMIN
    }
  },

  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {
      USER_TYPE: UserType.USER
    }
  },













  // WILDCARD OBAVEZNOI ZADNJI U LISTI!
  {
    path: '**',
    redirectTo: '/prijava'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
