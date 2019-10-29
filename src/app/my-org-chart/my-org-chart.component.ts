import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'ng2-org-chart';

@Component({
  selector: 'app-my-org-chart',
  templateUrl: './my-org-chart.component.html',
  styleUrls: ['./my-org-chart.component.scss']
})
export class MyOrgChartComponent implements OnInit {
  public topEmployee: IEmployee ;

  constructor() { }

  ngOnInit() {
    this.topEmployee = {
      name: 'Janis Martin',
      designation: 'CEO',
      img: './assets/images/1.jpg',
      subordinates: [
          {
              name: 'Matthew Wikes',
              designation: 'VP',
              img: './assets/images/card-2.JPG',
              subordinates: [
                  {
                      name: 'Tina Landry',
                      designation: 'Budget Analyst',
                      img: './assets/images/card-3.JPG',
                      subordinates: []
                  }

              ]
          },
          {
              name: 'Patricia Lyons',
              designation: 'VP',
              img: './assets/images/card-1.JPG',
              subordinates: [
                  {
                      name: 'Dylan Wilson',
                      designation: 'Web Manager',
                      img: './assets/images/card-2.JPG',
                      subordinates: []
                  },
                  {
                      name: 'Deb Curtis',
                      designation: 'Art Director',
                      img: './assets/images/card-3.JPG',
                      subordinates: []
                  }
              ]
          },
          {
              name: 'Larry Phung',
              designation: 'VP',
              img: './assets/images/card-1.JPG',
              subordinates: []
          }
      ]
        };
  }

}
