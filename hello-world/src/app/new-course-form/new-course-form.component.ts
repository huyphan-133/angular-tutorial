import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  categories = [
    {id:1, name:'Development'},
    {id:2, name:'Art'},
    {id:3, name:'Languages'},
  ]

  submit(course:NgForm){
    console.log(course)
  }
}
