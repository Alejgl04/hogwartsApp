import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HogwartsRoutingModule } from './hogwarts-routing.module';
import { CharactersComponent } from './pages/characters/characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { MaterialModule } from '../material/material.module';
import { TablesComponent } from './components/tables/tables.component';


@NgModule({
  declarations: [
    CharactersComponent,
    StudentsComponent,
    TeachersComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    HogwartsRoutingModule,
    MaterialModule
  ]
})
export class HogwartsModule { }
