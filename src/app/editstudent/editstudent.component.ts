import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SamstrackService } from '../samstrack.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
newId:any
student:any

constructor(private activateRoute:ActivatedRoute,private s:SamstrackService,private r:Router){}
 ngOnInit(){
  this.newId=Number(this.activateRoute.snapshot.paramMap.get('id'))
  console.log(this.newId)
  this.s.getStudentById(this.newId).subscribe((res)=>{
    this.student=res
    
  })
 
 }
 updateStudent(){
    this.s.updateStudent(this.student).subscribe(()=>{
      alert("Update successfully")
      this.r.navigate(['/students'])
    })
    
 }
}
