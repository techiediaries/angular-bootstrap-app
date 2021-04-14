import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[];

  constructor(public dataService : DataService) {

   }

  ngOnInit(): void {
    this.dataService.getNews().subscribe((data)=>{
      console.log(data);
      this.data = data['articles'];
    });
  }

}
