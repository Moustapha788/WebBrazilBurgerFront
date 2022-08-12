import { Component, OnInit } from '@angular/core';
import { filter, map, take } from 'rxjs';
import { Client } from 'src/models/User';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  tableauDesClients: Client[] = []
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllClients().
      pipe(
        take(1),

        map((data: any) => {
          data.filter((x: Client) => {
            if (x.doneAnOrderer) {
              this.tableauDesClients.push(x)
            }
          });
          // data.forEach((elt: Client) => {
          //   this.tableauDesClients.push(elt)
          // })


        })

      ).subscribe()
    console.log(this.tableauDesClients);

  }
}
