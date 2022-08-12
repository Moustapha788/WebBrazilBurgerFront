import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/models/User';

@Component({
  selector: 'app-tr-client',
  templateUrl: './tr-client.component.html',
  styleUrls: ['./tr-client.component.css']
})
export class TrClientComponent implements OnInit {

  @Input()
  client!: Client;

  @Input()
  i!: number

  constructor(private router:Router) { }

  ngOnInit(): void {
  }



  detail(client: Client) {
    this.router.navigateByUrl("clients/"+client.id);
  }


}
