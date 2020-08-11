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
    console.log('here')
    let record = {};
    record['Name'] = this.commentName;
    record['Message'] = this.commentMessage;
    this.commentsService.create_newComment(record).then(resp => {
      this.commentName="";
      this.commentMessage = "";
      console.log(resp);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
