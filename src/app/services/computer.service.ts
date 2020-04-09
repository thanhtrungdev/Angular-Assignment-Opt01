import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../models/computer.model';

@Injectable({
  providedIn: 'root',
})
export class ComputerService {
  constructor(private http: HttpClient) {}

  computerURL = 'http://localhost:3000/computers';

  getAllComputer(): Observable<any> {
    return this.http.get(this.computerURL);
  }

  getComputerById(id: number): Observable<Computer> {
    return this.http.get<Computer>(`${this.computerURL}/${id}`);
  }

  createComputer(newComputer: Partial<Computer>): Observable<Computer> {
    return this.http.post<Computer>(this.computerURL, newComputer);
  }

  updateComputer(computer: Computer): Observable<Computer> {
    return this.http.put<Computer>(
      `${this.computerURL}/${computer.id}`,
      computer
    );
  }
  deleteComputer(computer: Computer): Observable<any> {
    return this.http.delete(`${this.computerURL}/${computer.id}`);
  }
}
