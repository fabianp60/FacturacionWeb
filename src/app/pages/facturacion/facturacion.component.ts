import { Component, OnInit } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  remoteDataSource: any;

  constructor() {
    let serviceUrl = "https://localhost:7254/api/Factura";
    this.remoteDataSource  = createStore({
        key: "numeroFactura",
        loadUrl: serviceUrl,
        insertUrl: serviceUrl,
        updateUrl: serviceUrl,
        deleteUrl: serviceUrl
    });
  }

  ngOnInit(): void {
  }

}
