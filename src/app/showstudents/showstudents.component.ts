import { Component, OnInit } from '@angular/core';
import { SamstrackService } from '../samstrack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showstudents',
  templateUrl: './showstudents.component.html',
  styleUrls: ['./showstudents.component.css']
})
export class ShowstudentsComponent implements OnInit {
  students: any[] = [];  // Ensure students is an array

  constructor(private s: SamstrackService, private r: Router) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.s.getStudent().subscribe({
      next: (res) => {
        this.students = res as any[]; // Ensure correct format
        console.log('Students fetched:', res);
      },
      error: (error) => {
        console.error('Error fetching students:', error);
        alert('Failed to load students. Please try again.');
      }
    });
  }

  deleteHandler(id: any) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.s.deleteStudent(id).subscribe({
        next: () => {
          alert('Student deleted successfully.');
          this.getStudents(); // Refresh list after deletion
        },
        error: (error) => {
          console.error('Error deleting student:', error);
          alert('Failed to delete student. Please try again.');
        }
      });
    }
  }
}
