import { Component, OnInit } from '@angular/core';

@Component({
  //component in need not be an element it can be any of the following
  selector: 'app-servers',
  //selector: '[app-servers]',    //an attribute
  //selector: '.app-servers',     //a class just like css
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server created yet';
  serverName = '';
  serverStatus = false;
  servers = ['Test', 'Test2'];

  constructor() {

    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverStatus = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created with name: ' +this.serverName;
  }

  onUpdateServerName(event: Event){
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
