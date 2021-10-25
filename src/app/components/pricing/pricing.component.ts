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
      bandwidth : '4GB',
      space : '1GB',
      support : 'Yes',
      domain : 10,
      isActive : false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * returns 'active' if isActive is true in pricingData[]
   * @param index
   */
  public getClass(index : number) : string {
    if (true === this.pricingData[index]['isActive']) {
      return 'active';
    }
    return '';
  }

}
