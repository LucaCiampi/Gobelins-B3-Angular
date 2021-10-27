import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqData = [
    {
      title : 'Q. What is Lorem Ipsum?',
      text : 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
    },
    {
      title : 'Q. What is Lorem Ipsum?',
      text : 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
    },
    {
      title : 'Q. Why use Lorem Ipsum?',
      text : 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
    },
    {
      title : 'Q. Is safe use Lorem Ipsum?',
      text : 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
    },
    {
      title : 'Q. How many variations can exist?',
      text : 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
    },
    {
      title : 'When can be used?',
      text : 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
