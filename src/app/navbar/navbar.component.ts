//fonte da imagem: https://www.flaticon.com/free-icon/scrum_5266427

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sum-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'Scrum Utility Manager';
  itemImageUrl = "./assets/icone.png";  

  constructor() { }

  ngOnInit(): void {
  }

}
