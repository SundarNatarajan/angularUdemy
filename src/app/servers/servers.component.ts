import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false
  isNewServerAdded: string = ''
  toggleDisplayBtn = false
  userClicksDetails = []
  userClickCount = 0
  

  servers = [{
    name : 'Server1',
    id: 1,
    status : ''
  }, {
    name: 'Server2',
    id: 2,
    status : ''
  }]

  serverName= ''


  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }
  onAddServer(): void{
    this.isNewServerAdded = 'yes New server added!'
    this.servers.push({
      id: 0,
      name: this.serverName,
      status: ''
    })
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onDisplayBtnClick(event : Event){
    this.toggleDisplayBtn = !this.toggleDisplayBtn  
    this.userClicksDetails.push({
      time: new Date(),
      id: this.userClickCount++
    })
  }
}
