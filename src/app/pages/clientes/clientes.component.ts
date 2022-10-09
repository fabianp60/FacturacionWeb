import { Component, OnInit } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  remoteDataSource: any;

  constructor() { 
    let serviceUrl = "https://localhost:7254/api/Cliente";
    this.remoteDataSource  = createStore({
        key: "id",
        loadUrl: serviceUrl,
        insertUrl: serviceUrl,
        updateUrl: serviceUrl,
        deleteUrl: serviceUrl
    });
  }

  ngOnInit(): void {
  }

}
