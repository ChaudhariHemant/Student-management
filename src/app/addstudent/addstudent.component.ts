import { Component } from '@angular/core';
import { StudentService } from '../student.service'; // Updated service name
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  student = {
    name: "",
    email: ""
  };

  constructor(private studentService: StudentService, private router: Router) {} // Updated service name

  submitHandler() {
    this.studentService.addStudent(this.student).subscribe({
      next: (res) => {
        alert("Student Added Successfully");
        this.router.navigate(['/students']);
      },
      error: (error: any) => {
        console.error("Error adding student:", error);
        alert("Failed to add student. Please try again.");
      }
    });
  }
}