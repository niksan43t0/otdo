import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {PricesComponent} from "./pages/prices/prices.component";
import {ServicesResolver} from "./pages/prices/ServicesResolver";
import {MainPageComponent} from "./pages/main/main-page.component";
import {MainPageResolver} from "./pages/main/MainPageResolver";
import {MachinesPageResolver} from "./pages/machines/machines-page-resolver.service";
import {MachinesPageComponent} from "./pages/machines/machines-page.component";
import {ServicesPageComponent} from "./pages/services/services-page.component";
import {ServicesPageResolver} from "./pages/services/services-page-resolver.service";
import {GalleryPageComponent} from "./pages/gallery/gallery-page.component";
import {GalleryPageResolver} from "./pages/gallery/gallery-page-resolver.service";

const routes: Routes = [
  {path: '', component: MainPageComponent, resolve: {posts: MainPageResolver}},
  {path: 'services', component: ServicesPageComponent, resolve: {posts: ServicesPageResolver}},
  {path: 'machines', component: MachinesPageComponent, resolve: {posts: MachinesPageResolver}},
  {path: 'gallery', component: GalleryPageComponent, resolve: {posts: GalleryPageResolver}},
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
