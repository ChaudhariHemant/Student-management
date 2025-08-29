import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { NewsComponent } from './news/news.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { FormsModule } from '@angular/forms';
import { EditstudentComponent } from './editstudent/editstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    NewsComponent,
    ShowstudentsComponent,
    AddstudentComponent,
    EditstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
