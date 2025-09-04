package com.StudentManagemant.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.hibernate.query.criteria.HibernateCriteriaBuilder;
import org.hibernate.query.criteria.JpaCriteriaQuery;
import org.hibernate.query.criteria.JpaRoot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.StudentManagemant.entity.Student;

@Repository
public class StudentDao {

    @Autowired
    private SessionFactory factory;

    public List<Student> getAllStudentsById(List<Long> studentIds) {
        Session session = null;
        List<Student> students = null;
        try {
            session = factory.openSession();
            students = session.byMultipleIds(Student.class).multiLoad(studentIds);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return students;
    }

    public List<Student> getAllStudents() {
        Session session = null;
        List<Student> list = null;
        try {
            session = factory.openSession();
            
            // Updated Criteria usage for Hibernate 6.x
            HibernateCriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
            JpaCriteriaQuery<Student> criteriaQuery = criteriaBuilder.createQuery(Student.class);
            JpaRoot<Student> root = criteriaQuery.from(Student.class);
            criteriaQuery.select(root);
            
            list = session.createQuery(criteriaQuery).getResultList();
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return list;
    }

    public Student createStudent(Student student) {
        Session session = null;
        Student s = null;
        try {
            session = factory.openSession();
            Transaction transaction = session.beginTransaction();
            session.persist(student); // Using persist instead of save for Hibernate 6
            transaction.commit();
            s = student;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return s;
    }

    public Student getStudentsById(long id) {
        Session session = null;
        Student student = null;
        try {
            session = factory.openSession();
            student = session.get(Student.class, id);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return student;
    }

    public Student updateStudent(Student studentDetails) {
        Session session = null;
        Student s = null;
        try {
            session = factory.openSession();
            Transaction transaction = session.beginTransaction();
            session.merge(studentDetails); // Using merge instead of update for Hibernate 6
            transaction.commit();
            s = studentDetails;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return s;
    }

    public String deleteStudent(long id) {
        Session session = null;
        String msg = null;
        try {
            session = factory.openSession();
            Transaction transaction = session.beginTransaction();
            Student student = session.get(Student.class, id);

            if (student != null) {
                session.remove(student); // Using remove instead of delete for Hibernate 6
                transaction.commit();
                msg = "Deleted !!";
            } else {
                msg = "Not Exists !!";
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return msg;
    }
    
    public List<Student> searchStudents(String keyword) {
        Session session = null;
        List<Student> students = null;
        try {
            session = factory.openSession();
            String hql = "FROM Student s WHERE s.name LIKE :keyword OR s.email LIKE :keyword";
            Query<Student> query = session.createQuery(hql, Student.class);
            query.setParameter("keyword", "%" + keyword + "%");
            students = query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return students;
    }
}