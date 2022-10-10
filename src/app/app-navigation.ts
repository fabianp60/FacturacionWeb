export const navigation = [
  {
    text: 'Inicio',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Facturación',
    icon: 'money',
    items: [
      {
        text: 'Clientes',
        path: '/clientes'
      },
      {
        text: 'Categorias',
        path: '/categorias'
      },
      {
        text: 'Productos',
        path: '/productos'
      },
      {
        text: 'Facturas',
        path: '/facturacion'
      }
    ]
  },
  /*
  {
    text: 'Reportes',
    path: '/reportes',
    icon: 'chart'
  }*/
];
