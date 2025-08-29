import { Component } from '@angular/core';
import { SamstrackService } from '../samstrack.service';
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

  constructor(private s: SamstrackService, private r: Router) {}

  submitHandler() {
    this.s.addStudent(this.student).subscribe({
      next: (res) => {
        alert("Student Added Successfully");
        this.r.navigate(['/students']);  // Navigate to students list
      },
      error: (error: any) => {
        console.error("Error adding student:", error);
        alert("Failed to add student. Please try again.");
      }
    });
  }
}
