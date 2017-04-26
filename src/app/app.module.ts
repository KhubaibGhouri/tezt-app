import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FollowComponent } from './follow/follow.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';
import { Header2Component } from './header-2/header-2.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { Header3Component } from './header-3/header-3.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeedsComponent,
    FollowComponent,
    UserProfileComponent,
    OtherProfileComponent,
    Header2Component,
    ComingSoonComponent,
    Header3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
