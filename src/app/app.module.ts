import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FadeInDirective } from './Directives/fade-in.directive';
import { FormContainerCenterComponent } from './Components/Forms/form-container-center/form-container-center.component';
import { FormLabelComponent } from './Components/Forms/form-label/form-label.component';
import { FormTextComponent } from './Components/Forms/form-text/form-text.component';
import { FormPasswordComponent } from './Components/Forms/form-password/form-password.component';
import { FormButtonComponent } from './Components/Forms/form-button/form-button.component';
import { FormTitleComponent } from './Components/Forms/form-title/form-title.component';
import { FadeInDownDirective } from './Directives/fade-in-down.directive';
import { FormsModule } from '@angular/forms';
import { FadeInDownBigDirective } from './Directives/fade-in-down-big.directive';
import { LoadingComponent } from './Components/Modals/loading/loading.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { ToastComponent } from './Components/UI/toast/toast.component';
import { UserNavigationComponent } from './Components/Navigation/user-navigation/user-navigation.component';
import { AdminNavigationComponent } from './Components/Navigation/admin-navigation/admin-navigation.component';
import { NavigationContainerComponent } from './Components/Navigation/navigation-container/navigation-container.component';
import { SpinnerComponent } from './Components/UI/spinner/spinner.component';
import { AppBackgroundComponent } from './Components/UI/app-background/app-background.component';
import { UnosBankomataComponent } from './Components/admin/unos-bankomata/unos-bankomata.component';
import { ContentPaddingComponent } from './Components/UI/content-padding/content-padding.component';
import { TableContainerComponent } from './Components/UI/table-container/table-container.component';
import { AdminPocetnaComponent } from './Components/admin/admin-pocetna/admin-pocetna.component';
import { FormContainerComponent } from './Components/Forms/form-container/form-container.component';
import { ConfirmComponent } from './Components/Modals/confirm/confirm.component';
import { IzmjenaBankomataComponent } from './Components/admin/izmjena-bankomata/izmjena-bankomata.component';

@NgModule({
  declarations: [
    AppComponent,
    FadeInDirective,
    FormContainerCenterComponent,
    FormLabelComponent,
    FormTextComponent,
    FormPasswordComponent,
    FormButtonComponent,
    FormTitleComponent,
    FadeInDownDirective,
    FadeInDownBigDirective,
    LoadingComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ToastComponent,
    UserNavigationComponent,
    AdminNavigationComponent,
    NavigationContainerComponent,
    SpinnerComponent,
    AppBackgroundComponent,
    UnosBankomataComponent,
    ContentPaddingComponent,
    TableContainerComponent,
    AdminPocetnaComponent,
    FormContainerComponent,
    ConfirmComponent,
    IzmjenaBankomataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
