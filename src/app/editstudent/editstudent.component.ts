import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service'; // Updated service name
import { Router } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
  newId: any;
  student: any = {
    name: "",
    email: ""
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private studentService: StudentService, // Updated service name
    private router: Router
  ) {}

  ngOnInit() {
    this.newId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.studentService.getStudentById(this.newId).subscribe((res) => {
      this.student = res;
    });
  }

  updateStudent() {
    this.studentService.updateStudent(this.student).subscribe({
      next: () => {
        alert("Update successfully");
        this.router.navigate(['/students']);
      },
      error: (error) => {
        console.error("Error updating student:", error);
        alert("Failed to update student. Please try again.");
      }
    });
  }
}