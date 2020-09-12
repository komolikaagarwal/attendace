import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminformComponent } from './adminform/adminform.component';
import { FacultyformComponent } from './facultyform/facultyform.component';
import { HomeComponent } from './home/home.component';
import { StudentformComponent } from './studentform/studentform.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component:AdminformComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faculty', component: FacultyformComponent },
  { path: 'student', component: StudentformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
