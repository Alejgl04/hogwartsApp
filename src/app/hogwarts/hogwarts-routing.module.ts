import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { AddNewComponent } from './pages/students/add-new/add-new.component';
import { ListStudentsComponent } from './pages/students/list-students/list-students.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'characters', component: CharactersComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'students/new-students', component: AddNewComponent },
      { path: 'students/list-students', component: ListStudentsComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: '**', redirectTo: 'characters'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HogwartsRoutingModule { }
