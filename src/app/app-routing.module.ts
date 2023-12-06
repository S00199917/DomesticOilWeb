import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent as LogBase }  from './logsign/base/base.component';
import { BaseComponent as MainBase} from './main/base/base.component';
import { MainComponent } from './device/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/device'},
  {path: 'login', component:LogBase},
  {path: 'home', component:MainBase},
  {path: 'device', component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
