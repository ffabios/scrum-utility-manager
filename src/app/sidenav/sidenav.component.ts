import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sum-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  dataAtual = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
