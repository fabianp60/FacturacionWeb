import { Component, OnInit, ViewChild } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { ProductoService, CategoriaService } from 'src/app/api/services';
import { Producto, Categoria } from 'src/app/api/models';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  remoteDataSource: any;
  categoriasData: any;
  categorias!: Categoria[];
  serviceUrl: string = "https://localhost:7254/api/Producto";
  categoriaUrl: string = "https://localhost:7254/api/Categoria";
  @ViewChild('dataGridRef', { static: false }) dataGrid!: DxDataGridComponent;
  /* Datos del popup */
  popupVisible = false;
  saveButtonOptions: any;
  closeButtonOptions: any;
  producto: Producto = { nombre: "", precioUnitario: 0, cantidadExistencia: 0, categoriaId: 0 };
  onFormSubmit: any;
  /* Datos del Form */
  colCountByScreen: Object;

  constructor(private productoService: ProductoService, private categoriaService: CategoriaService) {
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

    this.categoriasData = createStore({
      key: 'id',
      loadUrl: this.categoriaUrl
    });

    categoriaService.apiCategoriaGet$Json().subscribe(res => this.categorias = res);

    this.saveButtonOptions = {
      icon: 'save',
      text: 'Guardar',
      useSubmitBehavior: true
    };

    this.onFormSubmit = function (e:Event) {
      this.crearProductoApi();
      e.preventDefault();
    };
  }

  screen(width: number) {
    return width < 720 ? 'sm' : 'md';
  }

  precioUnitComparison() {
    return 0;
  }

  limpiarProducto() {
    this.producto.nombre = ""; 
    this.producto.precioUnitario = 0; 
    this.producto.cantidadExistencia = 0;
    this.producto.categoriaId = 0;
  }

  crearProductoApi() {
    this.productoService.apiProductoPost$Response({ body: this.producto})
      .subscribe(res => {
        let message = `No se pudo guardar el producto ${this.producto.nombre}`;
        let notifyType = "error";
        if(res.ok) {
          message = `Se ha guardado el producto ${this.producto.nombre}`;
          notifyType = "success";
          this.popupVisible = false;
          this.dataGrid.instance.refresh();
          this.limpiarProducto();
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

  agregarProducto() {
    this.popupVisible = true;
  }

  ngOnInit(): void {
  }

}
