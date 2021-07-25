import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersComponent } from './teachers.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HogwartsService } from '../../../services/hogwarts.service';

describe('TeachersComponent', () => {
  let component: TeachersComponent;
  let fixture: ComponentFixture<TeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersComponent ],
      imports: [
        HttpClientModule,

      ],
      providers:[
        HogwartsService,
        HttpClient,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
