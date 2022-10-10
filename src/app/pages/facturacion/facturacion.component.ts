import { Component, OnInit, ViewChild } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { FacturaService, ClienteService, ItemVentaService } from 'src/app/api/services';
import { Factura, Cliente, ItemVenta } from 'src/app/api/models';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  remoteDataSource: any;
  clienteData: any;
  itemventaData: any;
  clientes!: Cliente[];
  serviceUrl: string = "https://localhost:7254/api/Factura";
  clienteUrl: string = "https://localhost:7254/api/Cliente";
  itemventaUrl: string = "https://localhost:7254/api/ItemVenta";
  @ViewChild('dataGridRef', { static: false }) dataGrid!: DxDataGridComponent;
  /* Datos del popup */
  popupVisible = false;
  saveButtonOptions: any;
  closeButtonOptions: any;
  factura: Factura = { clienteId: 0, fechaExpedicion: '', itemsVenta: [] };
  onFormSubmit: any;
  /* Datos del Form */
  colCountByScreen: Object;
  searchModeOption = 'contains';
  searchExprOption: any = 'nombre';
  searchTimeoutOption = 200;
  minSearchLengthOption = 0;
  showDataBeforeSearchOption = false;

  constructor(private facturaService: FacturaService, private clienteService: ClienteService) {
    this.colCountByScreen = { md: 2, sm: 1 };
    this.remoteDataSource  = createStore({
        key: "numeroFactura",
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

    this.clienteData = createStore({
      key: 'id',
      loadUrl: this.clienteUrl
    });

    this.itemventaData = createStore({
      key: 'id',
      loadUrl: this.itemventaUrl
    });

    clienteService.apiClienteGet$Json().subscribe(res => this.clientes = res);

    this.saveButtonOptions = {
      icon: 'save',
      text: 'Guardar',
      useSubmitBehavior: true
    };

    this.onFormSubmit = function (e:Event) {
      this.crearFacturaApi();
      e.preventDefault();
    };
  }

  screen(width: number) {
    return width < 720 ? 'sm' : 'md';
  }

  getClienteDisplayExpr(item: Cliente) {
    if (!item) {
      return '';
    }
    return `${item.nombre} ${item.apellido}`;
  }

  precioUnitComparison() {
    return 0;
  }

  limpiarFactura() {
    this.factura.clienteId = 0; 
    this.factura.fechaExpedicion = '';
    this.factura.itemsVenta = [];
  }

  crearFacturaApi() {
    this.facturaService.apiFacturaPost$Response({ body: this.factura})
      .subscribe({
          next: (res) => {
            let message = `No se pudo guardar la factura`;
            let notifyType = "error";
            if(res.ok) {
              message = `Se ha guardado la factura`;
              notifyType = "success";
              this.popupVisible = false;
              this.dataGrid.instance.refresh();
              this.limpiarFactura();
            }
            notify({
              message,
              position: {
                my: 'center top',
                at: 'center top',
              },
            }, notifyType, 3000);
          },
          error: (e) => {
            console.log(e);
            notify({
              message: "No se pudo guardar la factura",
              position: {
                my: 'center top',
                at: 'center top',
              },
            }, "error", 3000);
          }
        });
  }

  agregarFactura() {
    this.popupVisible = true;
  }

  ngOnInit(): void {
  }

}
