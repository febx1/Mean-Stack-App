import { Injectable } from "@angular/core";
import { Post } from "./post.model";
@Injectable({providedIn:'root'})
export class PostsService{
  private posts:Post[]=[];

  getPosts(){
    return [...this.posts];
    // immutable

  }
  addPost(title:string,content:string){
    const post:Post={title:title,content:content}
    return post;
  }
}