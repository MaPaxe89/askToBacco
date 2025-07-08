import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageListaViniComponent } from './pages/page-lista-vini/page-lista-vini.component';
import { PageCiboEVinoComponent } from './pages/page-cibo-e-vino/page-cibo-e-vino.component';
import { PageContattiComponent } from './pages/page-contatti/page-contatti.component';
import { authGuard } from './auth/auth.guard';
import { NotLoggedComponent } from './components/not-logged/not-logged.component';
import { PageSequenzaComponent } from './pages/page-sequenza/page-sequenza.component';
import { RegisterComponent } from './components/register/register.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';


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
        canActivate: [authGuard]
    },
    {

        path: "notLogged",
        component: NotLoggedComponent,
    },
    {

        path: "lista-ordinata",
        component: PageSequenzaComponent,
    },
    {

        path: "register",
        component: RegisterComponent,
    },
    {

        path: "login",
        component: PageLoginComponent,
    },


];
