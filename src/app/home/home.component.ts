// home.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../api.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  disciplines = [{cipher:'test', name:'Calculus', is_active: true, passed: false, price: 150000}]
  constructor(private api: ApiService) {
    this.getAllDisciplines()
  }

  getAllDisciplines = () =>{
    this.api.getAllDisciplines().subscribe(
      disciplines  =>{
        this.disciplines = disciplines;
      }, error => console.log(error)
    )
  }
}
