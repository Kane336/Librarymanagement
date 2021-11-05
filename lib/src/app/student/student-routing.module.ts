import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AuthGuard } from './gaurds/auth.guard';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"dashbord",
    component:DashbordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"viewprofile",
    component:ViewprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"editprofile",
    component:EditprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'changepassword',
    component:ChangepasswordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"adminlogin",
    component:AdminloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
