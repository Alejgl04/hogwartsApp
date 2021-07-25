import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Characters } from 'src/app/interfaces/characters';
import { HogwartsService } from 'src/app/services/hogwarts.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit  {
  dataSource = new MatTableDataSource<Characters>([]);
  loading: boolean = false;

  constructor(
    private hogwartsService: HogwartsService
  ) { }

  ngOnInit(): void {
  }


  getHouse( nameHouse: string ): void {
    if ( nameHouse == '' ) {
      return;
    }
    this.loading = true;
    this.hogwartsService.getCharacters( nameHouse ).subscribe(
      (resp:Characters[]) => {
        this.loading = false;
        this.dataSource.data = resp;  

      }
    )
  }

}
