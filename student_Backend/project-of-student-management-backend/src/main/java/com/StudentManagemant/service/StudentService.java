package com.StudentManagemant.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.StudentManagemant.Model.StudentDTO;
import com.StudentManagemant.dao.StudentDao;
import com.StudentManagemant.entity.Student;

@Service
public class StudentService {

    @Autowired
    private StudentDao dao;

    public List<Student> getAllStudentsById(List<Long> studentIds) {
        return dao.getAllStudentsById(studentIds);
    }

    public List<Student> getAllStudents() {
        return dao.getAllStudents();
    }
    
    // New method to get all students as DTOs
    public List<StudentDTO> getAllStudentsAsDTO() {
        List<Student> students = dao.getAllStudents();
        return students.stream()
                .map(StudentDTO::new)
                .collect(Collectors.toList());
    }

    public Student createStudent(Student student) {
        return dao.createStudent(student);
    }

    public Student getStudentById(long id) {
        return dao.getStudentsById(id);
    }
    
    // New method to get student as DTO
    public StudentDTO getStudentDTOById(long id) {
        Student student = dao.getStudentsById(id);
        if (student != null) {
            return new StudentDTO(student);
        }
        return null;
    }

    public Student updateStudent(Student studentDetails) {
        return dao.updateStudent(studentDetails);
    }

    public String deleteStudent(long id) {
        return dao.deleteStudent(id);
    }
    
    public List<Student> searchStudents(String keyword) {
        return dao.searchStudents(keyword);
    }
}