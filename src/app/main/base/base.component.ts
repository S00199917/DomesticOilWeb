import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  testDevices = [
    {name: 'Midfield', battery : 59, level: 49},
    {name: 'Meelick', battery : 100, level: 78},
    {name: 'Clooninsin', battery : 22, level: 33}
  ]

  constructor(private fbService: FirebaseService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  tempory: any[] = []
  temp: number = 11;
  depth: number = 73;
  currentDate: Date = new Date();

  GenerateData():void{
    for (let i = 0; i < 1000; i++){
      const formattedDate = this.formatDate(this.currentDate);
      this.tempory.push({
        "Date": formattedDate,
        "Depth": this.GenerateDepth(this.depth),
        "Temperature": this.GenerateTemp(this.temp)});
      this.temp = this.tempory[i].Temperature
      this.depth = this.tempory[i].Depth
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    }

    console.table(this.tempory);

    this.UploadToFirebase();
  }

  formatDate(date: Date): string{
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };

    return new Intl.DateTimeFormat('en-IE', options).format(date);
  }

  GenerateDepth(depth:number): number{
    depth -= this.GetRandomInt(0, 6);
    if (depth < 1){
      depth = this.GetRandomInt(90, 100);
    }
    return depth
  }

  GenerateTemp(temp:number): number{
    temp += this.GetRandomInt(-3, 3);
    if (temp < -1){
      temp += this.GetRandomInt(0, 3);
    } if (temp > 33){
      temp += this.GetRandomInt(-3, 0);
    }
    return temp;
  }

  GetRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  UploadToFirebase(){
  
  }
}