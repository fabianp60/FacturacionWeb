import { Component, OnInit } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  remoteDataSource: any;

  constructor() { 
    let serviceUrl = "https://localhost:7254/api/Categoria";
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
