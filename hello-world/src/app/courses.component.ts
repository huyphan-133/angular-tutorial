
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:50}}
    `
})
export class CoursesComponent { 
   course = {
    title: 'Sach cua Huy',
    rating: 4.999,
    viewers: 12321,
    price: 200.95,
    releaseDate: new Date(2023,4,30)
   }

   text = `
   The result of this pipe is not reevaluated when the input is mutated. To avoid the need to reformat the date on every change-detection cycle, treat the date as an immutable object and change the reference when the pipe needs to run again. The result of this pipe is not reevaluated when the input is mutated. To avoid the need to reformat the date on every change-detection cycle, treat the date as an immutable object and change the reference when the pipe needs to run again. The result of this pipe is not reevaluated when the input is mutated. To avoid the need to reformat the date on every change-detection cycle, treat the date as an immutable object and change the reference when the pipe needs to run again.
   `

}