//los archivos tipo clase tienen metodos dentro de el
//las funciones no se definen como (function), ya las toma como funciones cuando estan dentro de la clase

import {RouterModule, Routes} from '@angular/router'; //importar librerias de las rutas

//importar componentes que creamos para enrutarlos
import {ProductComponent} from './component/product/product.component'; 
import {CompraComponent} from './component/compra/compra.component';

//creación de constante tipo arreglo[] con 2 objetos llamado rutas
const routerM:Routes = [//crear condicionales 

    {
        path:'producto',//cuando la url tengo producto, llama al componente
        component:ProductComponent// a este componente
    },
    {
        path:'compra',
        component:CompraComponent
    }
];
export const appRouter = RouterModule.forRoot(routerM);//exportando una constante con las condicionales que creamos
//exportar appRouter en app.module.ts