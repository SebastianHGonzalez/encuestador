import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { CourseComponent } from '../course/course.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id:number;
  offers: CourseComponent[];

  constructor(private dataService: DataService) { 

    this.id = 1;
  }

  ngOnInit() {

    this.offers = this.dataService.getOffersFor(this.id);
  }

}
