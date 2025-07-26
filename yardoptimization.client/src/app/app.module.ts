import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, MatButtonModule, MatIconModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
