

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showstudents',
  templateUrl: './showstudents.component.html',
  styleUrls: ['./showstudents.component.css']
})
export class ShowstudentsComponent implements OnInit {
  students: any[] = [];
  searchKeyword: string = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe({
      next: (res) => {
        this.students = res;
        console.log('Students fetched:', res);
      },
      error: (error) => {
        console.error('Error fetching students:', error);
        alert('Failed to load students. Please try again.');
      }
    });
  }

  searchStudents() {
    if (this.searchKeyword.trim()) {
      this.studentService.searchStudents(this.searchKeyword).subscribe({
        next: (res) => {
          this.students = res;
        },
        error: (error) => {
          console.error('Error searching students:', error);
          alert('Failed to search students. Please try again.');
        }
      });
    } else {
      this.getStudents();
    }
  }

  deleteHandler(id: any) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          alert('Student deleted successfully.');
          this.getStudents();
        },
        error: (error) => {
          console.error('Error deleting student:', error);
          alert('Failed to delete student. Please try again.');
        }
      });
    }
  }
}