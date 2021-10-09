import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {NotFoundComponent} from "./pages/NotFoundComponent/not-found.component";
import {ServicesComponent} from "./pages/services/services.component";

const routes: Routes = [
  // {path: '', component: MainComponent,},
  {path: '', component: ServicesComponent,},
  {path: 'services', component: ServicesComponent,},
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
