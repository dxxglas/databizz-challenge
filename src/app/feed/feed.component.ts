import { Component, OnInit } from '@angular/core';
import { CommentsService } from './../comments.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  comments: any;

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.commentsService.read_Comments().subscribe(data => {
      this.comments = data.map(e => {
      return{
        id: e.payload.doc.id,
        name: e.payload.doc.data()['Name'],
        message: e.payload.doc.data()['Message'],
      };
      })
      });
  }

}
