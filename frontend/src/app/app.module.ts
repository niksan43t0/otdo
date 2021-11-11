import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MainPageComponent} from "./pages/main/main-page.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ServicesResolver} from "./pages/services/ServicesResolver";
import {MessageModalComponent} from "./components/message-modal/message-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {ConfirmationModalComponent} from "./components/confirmation-modal/confirmation-modal.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {NgScrollbarModule} from "ngx-scrollbar";
import {PostComponent} from "./components/post/post.component";
import {MainPageResolver} from "./pages/main/MainPageResolver";
import {FooterComponent} from "./components/footer/footer.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NotFoundComponent,
    ServicesComponent,
    MessageModalComponent,
    ConfirmationModalComponent,
    NavbarComponent,
    PostComponent,
    FooterComponent,
  ],
  entryComponents: [
    MessageModalComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    NgScrollbarModule,
    FontAwesomeModule,
  ],
  providers: [
    ServicesResolver,
    MainPageResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
