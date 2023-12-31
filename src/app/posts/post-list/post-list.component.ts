import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'ap-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postsService: PostsService) {
    this.posts = postsService.getPosts();
  }

  ngOnInit() {

  }
}
