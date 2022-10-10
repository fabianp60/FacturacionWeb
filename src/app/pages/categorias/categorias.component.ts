import { Component, OnInit, ViewChild } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { CategoriaService } from 'src/app/api/services';
import { Categoria } from 'src/app/api/models';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  remoteDataSource: any;
  @ViewChild('dataGridRef', { static: false }) dataGrid!: DxDataGridComponent;
  /* Datos del popup */
  popupVisible = false;
  saveButtonOptions: any;
  closeButtonOptions: any;
  categoria: Categoria = {nombreCategoria: "" };
  onFormSubmit: any;
  serviceUrl: string = "https://localhost:7254/api/Categoria";
  
  constructor(private categoriaService: CategoriaService) { 
    this.remoteDataSource  = createStore({
        key: "id",
        loadUrl: this.serviceUrl,
        insertUrl: this.serviceUrl,
        updateUrl: this.serviceUrl,
        deleteUrl: this.serviceUrl,
        onBeforeSend: (operation, ajaxSettings) => {
          if (ajaxSettings.data.key) {
            ajaxSettings.contentType = "application/json";
            const keyValue = ajaxSettings.data.key;
            if(operation == "update") {
              const rowIndex = this.dataGrid.instance.getRowIndexByKey(keyValue);
              const rowData = this.dataGrid.instance.getVisibleRows()[rowIndex].data;
              ajaxSettings.data = JSON.stringify(rowData);
            }
            ajaxSettings.url += "/" + keyValue;  
          }
        }
    });

    this.saveButtonOptions = {
      icon: 'save',
      text: 'Guardar',
      useSubmitBehavior: true
    };

    this.onFormSubmit = function (e:Event) {
      this.crearCategoriaApi();
      e.preventDefault();
    };
  }

  crearCategoriaApi() {
    this.categoriaService.apiCategoriaPost$Response({ body: this.categoria})
      .subscribe(res => {
        let message = `No se pudo guardar la categoría ${this.categoria.nombreCategoria}`;
        let notifyType = "error";
        if(res.ok) {
          message = `Se ha guardado la categoría ${this.categoria.nombreCategoria}`;
          notifyType = "success";
          this.popupVisible = false;
          this.dataGrid.instance.refresh();
          this.categoria.nombreCategoria = "";
        }
        notify({
          message,
          position: {
            my: 'center top',
            at: 'center top',
          },
        }, notifyType, 3000);
      });
  }

  agregarCategoria() {
    this.popupVisible = true;
  }

  ngOnInit(): void {
  }

}


