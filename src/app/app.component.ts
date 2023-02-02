import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Create-profile-dashboard';
  // USE ROUTE FIND ID && EXTRACT DATA ----
  // name: any;

  // user = {
  //     id: 11,
  // }
  // userOne = {
  //   id: 15,
  // }
  // userthree = {
  //   id: 20,
  // }
  // constructor(
  //   private route: ActivatedRoute,
  // ) { }
  // USE ROUTE FIND ID && EXTRACT DATA End ----

  ngOnInit() {
  // USE ROUTE FIND ID && EXTRACT DATA  ----
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    //   console.log(this.name);
    // });
  // USE ROUTE FIND ID && EXTRACT DATA End ----

  }
}
