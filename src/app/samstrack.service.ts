import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamstrackService {
  private apiurl = "http://localhost:8091";  // Backend API base URL

  constructor(private http: HttpClient) {}

  // Get all students
  getStudent(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiurl}/student/get-all-students`);
  }

  // Add new student
  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiurl}/student/add-student`, student, { responseType: 'json' });
  }

  // Delete student
  deleteStudent(id: any) {
    return this.http.delete(`${this.apiurl}/student/delete-student/${id}`, { responseType: 'text' });
  }

  // Update student details
  updateStudent(student: any) {
    return this.http.put(`${this.apiurl}/student/update-student`, student);
  }

  getStudentById(id:any){
    return this.http.get(`${this.apiurl}/student/get-student-by-id/${id}`)
  }
}
