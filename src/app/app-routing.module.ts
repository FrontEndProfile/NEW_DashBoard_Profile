import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutContentComponent } from './admin/about-content/about-content.component';
import { HomeContentComponent } from './admin/home-content/home-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'dashboard',component:DashboardComponent },
  { path:'home',component:HomeComponent },
  { path:'about',component:AboutComponent },
  { path:'edit-profile',component:EditProfileComponent },
  { path:'Admin-home',component:HomeContentComponent },
  // { path:'Admin-about/:id',component:AboutContentComponent },
  { path:'Admin-about',component:AboutContentComponent },

  { path:'',component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
