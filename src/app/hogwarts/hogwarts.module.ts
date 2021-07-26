import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HogwartsRoutingModule } from './hogwarts-routing.module';
import { CharactersComponent } from './pages/characters/characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { MaterialModule } from '../material/material.module';
import { TablesComponent } from './components/tables/tables.component';
import { AddNewComponent } from './pages/students/add-new/add-new.component';
import { ListStudentsComponent } from './pages/students/list-students/list-students.component';


@NgModule({
  declarations: [
    CharactersComponent,
    StudentsComponent,
    TeachersComponent,
    TablesComponent,
    AddNewComponent,
    ListStudentsComponent,
    
  ],
  imports: [
    CommonModule,
    HogwartsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HogwartsModule { }
