import { Component, OnInit, ViewChild } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent, DxFormModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { ClienteService } from 'src/app/api/services';
import { Cliente } from 'src/app/api/models';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  remoteDataSource: any;
  serviceUrl: string = "https://localhost:7254/api/Cliente";
  @ViewChild('dataGridRef', { static: false }) dataGrid!: DxDataGridComponent;
  /* Datos del popup */
  popupVisible = false;
  saveButtonOptions: any;
  closeButtonOptions: any;
  cliente: Cliente = {nombre: "", apellido: "", fechaNacimiento: "", direccion: null, telefono: null, email: null };
  onFormSubmit: any;
  /* Datos del Form */
  maxDate: Date = new Date();
  colCountByScreen: Object;

  constructor(private clienteService: ClienteService) { 
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 18));
    this.colCountByScreen = { md: 2, sm: 1 };
    this.remoteDataSource  = createStore({
        key: "id",
        loadUrl:   this.serviceUrl,
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
      this.crearClienteApi();
      e.preventDefault();
    };
  }

  screen(width: number) {
    return width < 720 ? 'sm' : 'md';
  }

  limpiarCliente() {
    this.cliente.nombre = ""; 
    this.cliente.apellido = ""; 
    this.cliente.fechaNacimiento = "";
    this.cliente.direccion = null;
    this.cliente.telefono = null;
    this.cliente.email = null;
  }

  crearClienteApi() {
    this.clienteService.apiClientePost$Response({ body: this.cliente})
      .subscribe(res => {
        let message = `No se pudo guardar el cliente ${this.cliente.nombre}`;
        let notifyType = "error";
        if(res.ok) {
          message = `Se ha guardado el cliente ${this.cliente.nombre}`;
          notifyType = "success";
          this.popupVisible = false;
          this.dataGrid.instance.refresh();
          this.limpiarCliente();
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

  agregarCliente() {
    this.popupVisible = true;
  }

  ngOnInit(): void {
  }

}
