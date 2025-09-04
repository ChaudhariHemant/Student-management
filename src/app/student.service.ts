
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = "http://localhost:8080/student";  // Updated port to match backend (8080)

  constructor(private http: HttpClient) {}

  // Get all students
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-all-students`);
  }

  // Get all students as DTOs
  getStudentsDTO(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-all-students-dto`);
  }

  // Add new student
  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-student`, student);
  }

  // Delete student
  deleteStudent(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-student/${id}`, { responseType: 'text' });
  }

  // Update student details
  updateStudent(student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-student`, student);
  }

  // Get student by ID
  getStudentById(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-student-by-id/${id}`);
  }

  // Get student DTO by ID
  getStudentDTOById(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-student-dto-by-id/${id}`);
  }

  // Search students by name or email
  searchStudents(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search-students?keyword=${keyword}`);
  }
}