import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminformComponent } from './adminform/adminform.component';
import { FacultyformComponent } from './facultyform/facultyform.component';
import { StudentformComponent } from './studentform/studentform.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    HomeComponent,

    AdminformComponent,

    FacultyformComponent,

    StudentformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
