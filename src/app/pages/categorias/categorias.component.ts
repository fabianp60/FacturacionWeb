import { Component, OnInit, ViewChild } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  remoteDataSource: any;
  @ViewChild('dataGridRef', { static: false }) dataGrid!: DxDataGridComponent;
  selectedRowsData: any[] = [];

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

  getCategoriaSelected() {
    this.selectedRowsData = this.dataGrid.instance.getSelectedRowsData();
    alert(this.selectedRowsData[0].nombreCategoria);
    console.log(this.selectedRowsData);
    console.log(this.dataGrid.instance.getSelectedRowKeys());
  }

  ngOnInit(): void {
  }

}
