import { Injectable } from '@angular/core';
import { CourseComponent } from '../components/course/course.component'

@Injectable()
export class DataService {

  offers = new Array<CourseComponent>();

  constructor() { 


    for(let i of [0,1,2]){
      let mat = new CourseComponent;
      mat.code = 'CODE' + i;
      mat.kindName = 'materia' + i;
      this.offers.push(mat);
    }
  }

  getOffersFor(id: number){

    return this.offers;
  }
}
