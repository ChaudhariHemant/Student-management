import { Component } from '@angular/core';
import { CommentserviceService } from '../commentservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
     constructor(private s:CommentserviceService){}
     article:any
     ngOnInit(){
      this.s.getNews().subscribe({
        next:(res)=>{
           this.article=res.articles
           console.log(res)
        },
        error:(error)=>{

        }
      })
     }
}
