import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sum-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'scrum-utility-manager';
  
  constructor() { }

  ngOnInit(): void {
  }

}
