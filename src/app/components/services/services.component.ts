import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesData = [
    {
      icon : 'ti-settings',
      title : 'Digital Design',
      subtitle : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive : true
    },
    {
      icon : 'ti-palette',
      title : 'Unlimited Colors',
      subtitle : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive : false
    },
    {
      icon : 'ti-stats-up',
      title : 'Strategy Solutions',
      subtitle : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive : false
    },
    {
      icon : 'ti-package',
      title : 'Awesome Support',
      subtitle : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive : false
    },
    {
      icon : 'ti-dashboard',
      title : 'Truly Multipurpose',
      subtitle : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive : false
    },
    {
      icon : 'ti-headphone',
      title : 'Easy to customize',
      subtitle : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isActive : false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
