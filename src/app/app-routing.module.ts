import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentsViewComponent } from './components/appointments-view/appointments-view.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "app",
    component: AppointmentsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
