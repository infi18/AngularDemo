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

  constructor() {

    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
