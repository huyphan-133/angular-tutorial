import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    assignee: null
  }

  courses!: Array<any>;

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course 1' },
      { id: 2, name: 'course 2' },
      { id: 3, name: 'course 3' },
    ]
  }

  trackCourse(index: number, course: any) {
    return course ? course.id : undefined;
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course 4' });
  }
  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
