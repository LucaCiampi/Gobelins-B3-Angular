import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingData = [
    {
      price : '$29',
      bandwidth : '1GB',
      space : '50MB',
      support : 'No',
      domain : 1,
      isActive : true
    },
    {
      price : '$59',
      bandwidth : '2GB',
      space : '500MB',
      support : 'Yes',
      domain : 5,
      isActive : false
    },
    {
      price : '$79',
      bandwidth : '1GB',
      space : '1GB',
      support : 'No',
      domain : 10,
      isActive : false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
