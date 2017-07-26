import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  code: String;
  kindName: String;
  requisites: CourseComponent[];

  constructor() {
  }

  ngOnInit() {
  }

  hasRequisites(){
    
    return this.requisites.length > 0;
  }

  addRequisite(req: CourseComponent){

    this.requisites.push(req);
  }
}
