import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPocetnaComponent } from './Components/admin/admin-pocetna/admin-pocetna.component';
import { AdminComponent } from './Components/admin/admin.component';
import { IzmjenaBankomataComponent } from './Components/admin/izmjena-bankomata/izmjena-bankomata.component';
import { UnosBankomataComponent } from './Components/admin/unos-bankomata/unos-bankomata.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { UserType } from './Enums/user-type';
import { AuthGuard } from './Services/auth.guard';
import { BankGuard } from './Services/bank.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/prijava',
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
    canActivateChild: [AuthGuard],
    data: {
      USER_TYPE: UserType.ADMIN
    },
    children: [
      {
        path: '',
        component: AdminPocetnaComponent,
        data: {
          USER_TYPE: UserType.ADMIN
        },
      },
      {
        path: 'unos',
        component: UnosBankomataComponent,
        data: {
          USER_TYPE: UserType.ADMIN
        },
      },
      {
        path: 'izmjena/:redniBroj',
        component: IzmjenaBankomataComponent,
        canActivate: [BankGuard],
        data: {
          USER_TYPE: UserType.ADMIN
        }
      }
    ]
  },

  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {
      USER_TYPE: UserType.USER
    },
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
