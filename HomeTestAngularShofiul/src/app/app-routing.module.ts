import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {
        path: '',
        loadChildren: './components/components.module#ComponentsModule'
    },

    { path: 'unauthorized', loadChildren: './401/unauthorized.module#UnauthorizedModule' },
    { path: '404', loadChildren: './404/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
