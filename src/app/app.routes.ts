import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageListaViniComponent } from './pages/page-lista-vini/page-lista-vini.component';
import { PageCiboEVinoComponent } from './pages/page-cibo-e-vino/page-cibo-e-vino.component';
import { PageContattiComponent } from './pages/page-contatti/page-contatti.component';
import { authGuard } from './auth/auth.guard';
import { NotLoggedComponent } from './components/not-logged/not-logged.component';


export const routes: Routes = [

    {

        path: "",
        component: PageHomeComponent,
        
    },
    {

        path: "lista-vini",
        component: PageListaViniComponent,
    },
    {

        path: "cibo-e-vino",
        component: PageCiboEVinoComponent,
        canActivate: [authGuard],
    },
    {

        path: "contatti",
        component: PageContattiComponent,
    },
    {

        path: "notLogged",
        component: NotLoggedComponent,
    },

];
