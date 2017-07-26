import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
