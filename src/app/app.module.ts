import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FadeInDownBigDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
