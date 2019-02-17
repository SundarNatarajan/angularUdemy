import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  server = {
    name : 'Server',
    id: 10,
    status : Math.random() > 0.5 ? 'online' : 'offline'
  }

  serverId : number = this.server.id
  serverStatus : string = this.server.status
  getServerId(): number {
    return this.serverId
  }

  getServerStatus(): string{
    return this.serverStatus

  }

  getStatusColour(): string{
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

  ngOnInit() {
  }

}
