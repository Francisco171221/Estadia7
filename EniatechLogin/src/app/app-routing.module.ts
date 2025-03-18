import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Importar los componentes de las páginas
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // Página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
