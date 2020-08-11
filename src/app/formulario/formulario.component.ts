import { Component, OnInit } from '@angular/core';
import { CommentsService } from './../comments.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  commentName: string;
  commentMessage: string;

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
  }

  AddComment() {
    let record = {};
    record['name'] = this.commentName;
    record['message'] = this.commentMessage;
    record['date'] = new Date();
    this.commentsService.create_newComment(record)
    .then(res => {
      this.commentName="";
      this.commentMessage = "";
    })
    .catch(error => {
      console.log(error);
    });
  }

}
