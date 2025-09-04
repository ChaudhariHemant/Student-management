import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { NewsComponent } from './news/news.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: ShowstudentsComponent
  },
  {
    path: 'addstudent',
    component: AddstudentComponent
  },
  {
    path: 'editstudent/:id',
    component: EditstudentComponent
  },
  /*
  {
    path: 'comments',
    component: CommentComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }