import { Component, OnInit } from '@angular/core';
import { MyFollowersService } from '../services/my-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, map, switchMap, zip } from 'rxjs';

@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {
  myFollowers!: any[]
  constructor(
    private myFollowersService: MyFollowersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    zip(this.route.paramMap, this.route.queryParamMap)
      .pipe(
        switchMap(combined => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');
          console.log(`id=${id}, page=${page}`);

          return this.myFollowersService.getAll()
        })
      )
      .subscribe(followers => this.myFollowers = followers)
      


  }

}
