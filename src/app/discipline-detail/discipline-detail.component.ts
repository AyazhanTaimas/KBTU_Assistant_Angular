import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-discipline-detail',
  templateUrl: './discipline-detail.component.html',
  styleUrl: './discipline-detail.component.css'
})
export class DisciplineDetailComponent {
   lectures = [{lecture_id: 1, name:'test', cipher: 'test'}]
  private cipher: string | undefined;
  constructor(private api: ApiService) {
    this.getDisciplineLecture(this.cipher)
  }
  getDisciplineLecture = (cipher: any) =>{
    this.api.getDisciplineLecture(this.cipher).subscribe(
      lectures  =>{
        this.lectures = lectures;
      }, error => console.log(error)
    )
  }
}
