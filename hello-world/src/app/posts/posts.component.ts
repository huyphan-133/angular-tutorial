import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: any[];
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll()
      .subscribe(
        posts => this.posts = posts
      )
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post)

    input.value = '';

    this.postService.create(post)
      .subscribe(
        id => post['id'] = id,
        (error: AppError) => {
          this.posts.splice(0, 1)
          console.log('splice')

          if (error instanceof BadRequestError) {
            alert('Bad Request')
          }
          else
            throw error;
        })
  }

  updatePost(post: any) {
    this.postService.update(post)
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post: any) {
    this.postService.delete(post.id).subscribe();
    // let index = this.posts.indexOf(post);
    // this.posts.splice(index, 1);

    // this.postService.delete(post.id)
    //   .subscribe(
    //     null,
    //     (error: Response) => {
    //       this.posts.splice(index, 0, post)

    //       if (error instanceof NotFoundError) {
    //         alert('This post has already been deleted');
    //       }
    //       else
    //         throw error;
    //     })
  }
}
