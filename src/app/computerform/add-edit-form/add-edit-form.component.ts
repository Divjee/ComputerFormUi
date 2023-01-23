import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  
  constructor(private service:SharedService){}

  ComputerPartIds:any=[];
  
  @Input() form:any;
  formId:number | undefined ;
  partId:number | undefined   ;
  justification:string | undefined  ;

  ngOnInit(): void {
    this.formId=this.form.formId;
    this.partId=this.form.partId;
    this.justification=this.form.justification;
  }

  addForm(){
    var val = {formId:this.formId,
                partId:this.partId,
              justification:this.justification}
  this.service.addForm(val).subscribe(res=>{
    alert("Pieteikums pievienots");
  });
  }

  updateForm(){
    var val = {formId:this.formId,
      partId:this.partId,
    justification:this.justification}
    this.service.editForm(val).subscribe(res=>{
      alert("Rediģēts")
    });
  }

  refreshPartList(){
    this.service.getPartsList().subscribe(data=>{
      this.ComputerPartIds=data;
    });
  }

}
