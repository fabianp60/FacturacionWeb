import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule, DxPopupModule, DxTemplateModule, DxScrollViewModule, DxToastModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'categorias',
    component: CategoriasComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reportes',
    component: ReportesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'facturacion',
    component: FacturacionComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, DxButtonModule, DxPopupModule, DxTemplateModule, DxScrollViewModule, DxToastModule, DxSelectBoxModule ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    FacturacionComponent,
    ReportesComponent,
    ClientesComponent,
    CategoriasComponent,
    ProductosComponent
  ]
})
export class AppRoutingModule { }
