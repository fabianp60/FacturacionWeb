import { Component, OnInit } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  remoteDataSource: any;

  constructor() {
    let serviceUrl = "https://localhost:7254/api/Producto";
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
