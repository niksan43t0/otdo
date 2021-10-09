import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {NotFoundComponent} from "./pages/NotFoundComponent/not-found.component";

const routes: Routes = [
  {path: '', component: MainComponent,},
  {path: 'not-found', component: NotFoundComponent,},
  {path: '**', redirectTo: 'not-found/.'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
