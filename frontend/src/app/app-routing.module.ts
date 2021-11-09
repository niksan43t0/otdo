import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ServicesResolver} from "./pages/services/ServicesResolver";
import {MainPageComponent} from "./pages/main/main-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent,},
  {path: 'services', component: ServicesComponent, resolve: {services: ServicesResolver}},
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
