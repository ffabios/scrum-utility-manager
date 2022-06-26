import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sum-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  data: string ='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const d = this.route.snapshot.paramMap.get('data');
    this.data = d !== null ? d : '';
  }

}
