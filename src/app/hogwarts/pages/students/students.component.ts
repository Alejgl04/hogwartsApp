import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Students } from 'src/app/interfaces/students';
import { HogwartsService } from 'src/app/services/hogwarts.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  dataSource = new MatTableDataSource<Students>([]);
  loading: boolean = false;
  constructor(
    private hogwartsService: HogwartsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.hogwartsService.getStudents().subscribe(
      (resp:Students[]) => {
        this.loading = false;
        this.dataSource.data = resp;  

      }
    )
  }

}
