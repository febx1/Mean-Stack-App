import { Component, EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostsService } from "../post.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.scss'],

})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  constructor(private postService: PostsService) { }
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.postService.addPost(form.value.title, form.value.content)
  }
}
