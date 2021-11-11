import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {PricesComponent} from "./pages/services/prices.component";
import {ServicesResolver} from "./pages/services/ServicesResolver";
import {MainPageComponent} from "./pages/main/main-page.component";
import {MainPageResolver} from "./pages/main/MainPageResolver";

const routes: Routes = [
  {path: '', component: MainPageComponent, resolve: {posts: MainPageResolver}},
  {path: 'prices', component: PricesComponent, resolve: {services: ServicesResolver}},
  {path: 'not-found', component: NotFoundComponent,},
  // {path: '**', redirectTo: 'not-found/.'}, TODO with server side rendering
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
