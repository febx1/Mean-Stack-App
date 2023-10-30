import { Component } from '@angular/core';

@Component({
  selector: 'ap-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  posts=[
    {title:'First Post',content:'This is the first post\'s Content'},
    {title:'First Post',content:'This is the first post\'s Content'},
    {title:'First Post',content:'This is the first post\'s Content'},
  ]
}
