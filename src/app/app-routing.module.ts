import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SimplelayoutComponent } from './layout/simplelayout/simplelayout.component';

const appRoutes: Routes = [
  { path: '', component: SimplelayoutComponent,
    children: [ { path: '', component: HomepageComponent } ] 
  },
  { path: 'login', component: LoginpageComponent },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }