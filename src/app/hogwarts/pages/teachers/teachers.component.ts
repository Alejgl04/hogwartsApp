import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Staff } from 'src/app/interfaces/staff';
import { HogwartsService } from 'src/app/services/hogwarts.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  dataSource = new MatTableDataSource<Staff>([]);
  loading: boolean = false;
  constructor(
    private hogwartsService: HogwartsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.hogwartsService.getStaff().subscribe(
      (resp:Staff[]) => {
        this.loading = false;
        this.dataSource.data = resp;  

      }
    )
  }


}
