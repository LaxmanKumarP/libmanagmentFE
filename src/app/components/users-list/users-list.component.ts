import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{
  cols: any;
  usersList: any;
  formData:any;
  createUserForm!: FormGroup;
  selectedRowData:any;
  constructor(private sharedService:SharedService){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'dob', header: 'DOB' },
      { field: 'emailId', header: 'Email ID' },
      { field: 'address', header: 'Address' },
      { field: 'category', header: 'Category' },
      { field: 'role', header: 'Role Id' },
      { field: 'grade', header: 'Grade' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'updatedBy', header: 'Updated By' },
      { field: 'bookLimit', header: 'Book Limit' },
      { field: 'currentBookLimit', header: 'Current BookLimit' }
    ];
  }

  ngOnInit(): void {
    this.getUsersList();
    this.createForm();
  }

  createForm(){
    this.createUserForm = new FormGroup({
        'name': new FormControl('',[Validators.required]),
        'dob': new FormControl('',[Validators.required]),
        'emailId': new FormControl('',[Validators.required]),
        'address': new FormControl('',[Validators.required]),
        'category': new FormControl('',[Validators.required]),
        'role': new FormControl('',[Validators.required]),
        'grade': new FormControl('',[Validators.required]),
        'createdBy': new FormControl('',[Validators.required]),
        'updatedBy': new FormControl('',[Validators.required]),
        'bookLimit': new FormControl('',[Validators.required]),
        'currentBookLimit': new FormControl('',[Validators.required])
    })
  }

  getUsersList(){
    this.sharedService.getUsersList().subscribe(res=>{
      this.usersList = res;
    })
  }

  onEdit(rowdata:any){
    console.log('Edit clicked');

    this.selectedRowData = rowdata;
    this.createUserForm.patchValue({
      'name': rowdata.name,
      'dob': rowdata.dob,
      'emailId': rowdata.emailId,
      'address': rowdata.address,
      'category': rowdata.category,
      'role': rowdata.role,
      'grade': rowdata.grade,
      'createdBy': rowdata.createdBy,
      'updatedBy': rowdata.updatedBy,
      'bookLimit': rowdata.bookLimit,
      'currentBookLimit': rowdata.currentBookLimit,
    })

  }

  onSubmit(){
    let formValues = this.createUserForm.getRawValue()
    this.sharedService.createUserDetails(formValues).subscribe(res=>{
      console.log('re',res);
      this.getUsersList();
      this.createUserForm.reset();
    })
  }

  onUpdate(){
    console.log('update clicked');
    let updatedFormDetails = this.createUserForm.getRawValue();
    updatedFormDetails['id'] = this.selectedRowData.id;
    console.log(updatedFormDetails,'updatedFormDetails');
    this.sharedService.updateUserDetails(updatedFormDetails).subscribe(res =>{
      this.getUsersList();
      this.createUserForm.reset();
      })
  }

  onDelete(){
    
  }
}
