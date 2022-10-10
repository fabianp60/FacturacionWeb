import { Component, OnInit, ViewChild } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Categoria } from 'src/app/api/models';
import { CategoriaService } from 'src/app/api/services';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  remoteDataSource: any;
  @ViewChild('dataGridRef', { static: false }) dataGrid!: DxDataGridComponent;
  selectedRowsData: any[] = [];
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
              const newData = { id: keyValue,...JSON.parse(ajaxSettings.data.values)};
              ajaxSettings.data = JSON.stringify(newData);
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
          this.categoria.nombreCategoria = "";
          notifyType = "sucess";
          this.dataGrid.instance.refresh();
        }
        notify({
          message,
          position: {
            my: 'center top',
            at: 'center top',
          },
        }, notifyType, 3000);
        this.popupVisible = false;
      });
  }

  agregarCategoria() {
    this.popupVisible = true;
  }

  ngOnInit(): void {
  }

}


