import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservedListComponent } from './reservation/reserved-list/reserved-list.component';
import { StaffComponent } from './staff/staff/staff.component';
import { AnnouncementComponent } from './announcement/announcement.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "list", component: ReservedListComponent },
  { path: "staff", component: StaffComponent },
  { path: "announcement", component: AnnouncementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
