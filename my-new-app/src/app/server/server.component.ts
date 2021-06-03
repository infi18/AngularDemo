import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styles: [`
  .online{
    color: white;
  }
  `]
  //styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  //ways to define a variable, type of variable can be mentioned but it is not mandatory to mention the type
  serverID: number = 10;
  serverStatus: string = 'online';
  serverID1 = 20;
  serverStatus1 = 'offline';
  //Defining a method/function to fetch the value of Server

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
  }

  getServerStatus() {
    return this.serverStatus;  //fetches the value from variable server1 and returns that
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green':'red'
  }

  userName = '';


  ngOnInit(): void {
  }


}
