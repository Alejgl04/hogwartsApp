import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  dataStudent: any[] = [];
  studentForm = this.formBuilder.group({

    name:['',[ Validators.required ]],
    patronus:['',[ Validators.required ]],
    year:['',[ Validators.required ]],
    ancestry:['',[ Validators.required]],
    
  });
  constructor(
    private formBuilder:FormBuilder,
    private _snackBar: MatSnackBar,


  ) { }

  ngOnInit(): void {
  }
  

  fieldNotValid( value:string): boolean {
		if ( this.studentForm.get( value )?.invalid && this.studentForm.touched ){
			return true;
		}
		else{
			return false;
		}
	}

  sendRegister() {
    if( this.studentForm.invalid ) {
      return;
    }
    else{
      this.dataStudent.push(
        this.studentForm.value
      );
      localStorage.setItem('student', JSON.stringify(this.dataStudent) );
      this.openSnackBar('Se ha completado el registro correctamente');
    }
  }

  openSnackBar( message: string ): void {
    this._snackBar.open(message, 'Aceptar', {

    });
  }
}
