import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyComponentComponent} from './components/my-component/my-component.component';
import {FormsModule} from '@angular/forms'
import {AlertModule} from 'ngx-bootstrap/alert';
import {TrendingPublicationComponent} from './components/trending-publication/trending-publication.component';
import {PublicationComponent} from './components/publication/publication.component';
import {HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {SideNavbarComponent} from "./components/side-navbar/side-navbar.component";
import {TopNavbarComponent} from "./components/top-navbar/top-navbar.component";
import {MyPublicationsComponent} from './components/my-publications/my-publications.component';
import {GestionPublicationComponent} from './components/gestion-publication/gestion-publication.component';
import {LoginComponent} from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    MyComponentComponent,
    TrendingPublicationComponent,
    PublicationComponent,
    SideNavbarComponent,
    MyPublicationsComponent,
    GestionPublicationComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AlertModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
