import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Characters } from '../interfaces/characters';
import { Students } from '../interfaces/students';
import { Staff } from '../interfaces/staff';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  constructor(
    private http: HttpClient
  ) { }
  
  /**
   * environment api
   */
  private baseUrl: string = environment.apiUrl;
  /**
   * 
   * @param nameHouse 
   * @returns 
   * retrieve many characters by name house
   */
  getCharacters( nameHouse: string ): Observable<Characters[]> {
    const url  = `${this.baseUrl}/characters/house/${nameHouse}`;
    return this.http.get<Characters[]>( url );
  }

  /** 
   * @returns
   * retrieve many students
   */
  getStudents(): Observable<Students[]> {
    const url  = `${this.baseUrl}/characters/students`;
    return this.http.get<Students[]>( url );
  }
  /** 
   * @returns
   * retrieve many staff or teachers
   */
  getStaff(): Observable<Staff[]> {
    const url  = `${this.baseUrl}/characters/staff`;
    return this.http.get<Staff[]>( url );
  }
}
