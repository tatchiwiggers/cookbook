import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ck-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle: string = "Home"
  
  constructor() { }

  ngOnInit(): void {
  }

}

