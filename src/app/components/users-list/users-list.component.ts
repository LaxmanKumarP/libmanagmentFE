import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{
  cols: any;
  usersList: any;
  constructor(){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'dob', header: 'DOB' },
      { field: 'emailId', header: 'Email ID' },
      { field: 'address', header: 'Address' },
      { field: 'category', header: 'Category' },
      { field: 'roleId', header: 'Role Id' },
      { field: 'grade', header: 'Grade' },
      { field: 'bookLimit', header: 'Book Limit' }
    ];
  }
  ngOnInit(): void {
    this.usersList = this.getUsersList();
  }

  getUsersList(){
    return [{
      'id':1,
      'name':'Laxman',
      'dob':'09/04',
      'emailId':'laxman@google.com',
      'address':2012,
      'category':'Lecturer', 
      'roleId':'LBR',
      'grade':'Library',
      'bookLimit':10},
      {
        'id':2,
        'name':'Chinna',
        'dob':'03/07',
        'emailId':'chinna@google.com',
        'address':2014,
        'category':'Lecturer', 
        'roleId':'Science',
        'grade':217,
        'bookLimit':10},
        {
          'id':3,
          'name':'Vinni',
          'dob':'09/04',
          'emailId':'vinni@google.com',
          'address':2012,
          'category':'Student', 
          'roleId':'Maths',
          'grade':217,
          'bookLimit':6},
          {
            'id':4,
            'name':'henu',
            'dob':'03/04',
            'emailId':'henu@google.com',
            'address':2012,
            'category':'Lecturer', 
            'roleId':'LBR',
            'grade':'chk',
            'bookLimit':10},
    ]
  }
}
