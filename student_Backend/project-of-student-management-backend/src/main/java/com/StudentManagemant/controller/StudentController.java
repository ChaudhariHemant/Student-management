package com.StudentManagemant.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.StudentManagemant.Model.StudentDTO;
import com.StudentManagemant.entity.Student;
import com.StudentManagemant.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin("http://localhost:4200")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/get-all-students")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    
    // New endpoint using DTO
    @GetMapping("/get-all-students-dto")
    public List<StudentDTO> getAllStudentsDTO() {
        return studentService.getAllStudentsAsDTO();
    }

    @PostMapping("/add-student")
    public Student createStudent(@RequestBody Student student) {
        return studentService.createStudent(student);
    }

    @GetMapping("/get-student-by-id/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }
    
    // New endpoint using DTO
    @GetMapping("/get-student-dto-by-id/{id}")
    public StudentDTO getStudentDTOById(@PathVariable Long id) {
        return studentService.getStudentDTOById(id);
    }

    @PutMapping("/update-student")
    public Student updateStudent(@RequestBody Student studentDetails) {
        return studentService.updateStudent(studentDetails);
    }

    @DeleteMapping("/delete-student/{id}")
    public String deleteStudent(@PathVariable long id) {
        return studentService.deleteStudent(id);
    }
    @GetMapping("/search-students")
    public List<Student> searchStudents(@RequestParam String keyword) {
        return studentService.searchStudents(keyword);
    }

}