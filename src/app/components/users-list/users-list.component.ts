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
    // this.usersList = this.getUsersList();
    this.sharedService.getUsersList().subscribe(res=>{
      console.log(res,'res');
      this.usersList = res;
    })
    this.createUserForm = new FormGroup({
      'userDetails': new FormGroup({
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
    })
  }

  onSubmit(){
    // this.formData = {name:form.value.name};
    console.log('submit clicked');
    // console.log('formdata',  this.formData );
    this.createUserForm.valueChanges.subscribe(value => {
      console.log('Form changes:', value);
    });
  
    // this.formData 
  }


  // getUsersList(){
    // return 
    
    // [{
    //   'id':1,
    //   'name':'Laxman',
    //   'dob':'09/04',
    //   'emailId':'laxman@google.com',
    //   'address':2012,
    //   'category':'Lecturer', 
    //   'roleId':'LBR',
    //   'grade':'Library',
    //   'bookLimit':10},
    //   {
    //     'id':2,
    //     'name':'Chinna',
    //     'dob':'03/07',
    //     'emailId':'chinna@google.com',
    //     'address':2014,
    //     'category':'Lecturer', 
    //     'roleId':'Science',
    //     'grade':217,
    //     'bookLimit':10},
    //     {
    //       'id':3,
    //       'name':'Vinni',
    //       'dob':'09/04',
    //       'emailId':'vinni@google.com',
    //       'address':2012,
    //       'category':'Student', 
    //       'roleId':'Maths',
    //       'grade':217,
    //       'bookLimit':6},
    //       {
    //         'id':4,
    //         'name':'henu',
    //         'dob':'03/04',
    //         'emailId':'henu@google.com',
    //         'address':2012,
    //         'category':'Lecturer', 
    //         'roleId':'LBR',
    //         'grade':'chk',
    //         'bookLimit':10},
    // ]
  // }
}
