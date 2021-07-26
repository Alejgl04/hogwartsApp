import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/interfaces/students';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {
  dataStudent: Students[]= [];

  constructor() { }

  ngOnInit(): void {
    this.getLocaldata();
  }

  getLocaldata() {
    this.dataStudent = JSON.parse(localStorage.getItem('student')!);
  }
}
