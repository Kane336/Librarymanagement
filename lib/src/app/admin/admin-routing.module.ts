import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from '../admin/dashbord/dashbord.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import {AllbooksComponent} from './allbooks/allbooks.component'
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { BookissuedComponent } from './bookissued/bookissued.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import {AddcategoryComponent} from '../admin/addcategory/addcategory.component'
import { IssuebookComponent } from './issuebook/issuebook.component';
import {AuthGuard} from './gaurd/auth.guard'

const routes: Routes = [
  {
    path:'',
    component:DashbordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'registerstudent',
    component:RegisterstudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'totalbooks',
    component:AllbooksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'categorybooks',
    component:CategoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'authors',
    component:AuthorComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'bookissued',
    component:BookissuedComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:'add',
    loadChildren : () => import('../add/add.module').then(m => m.AddModule),
    canActivate:[AuthGuard]
  },
  {
    path:'issuebook',
    component:IssuebookComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'view',
    loadChildren : () => import('../view/view.module').then(m => m.ViewModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
