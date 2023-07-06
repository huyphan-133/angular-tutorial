import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form-v2',
  templateUrl: './new-course-form-v2.component.html',
  styleUrls: ['./new-course-form-v2.component.css']
})
export class NewCourseFormV2Component {
  form;

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic:AbstractControl){
     let index = this.topics.controls.indexOf(topic);
     this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray
  }

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }


}
