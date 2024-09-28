import { Component } from '@angular/core';

@Component({
  selector: 'app-assigned-books-list',
  templateUrl: './assigned-books-list.component.html',
  styleUrl: './assigned-books-list.component.scss'
})
export class AssignedBooksListComponent {
  
  cols: any;
  assignedBookList: any;
  constructor(){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'bookid', header: 'Name' },
      { field: 'userid', header: 'User Id' },
      { field: 'createdtime', header: 'Created Time' },
      { field: 'updatedtime', header: 'Updated Time' },
      { field: 'isshow', header: 'Is Show' },
      { field: 'subject', header: 'Subject' },
      { field: 'totalcount', header: 'Total Count' },
      { field: 'availablecount', header: 'Available Count' },
    ];
  }

  ngOnInit(): void {
    this.assignedBookList = this.getAssignedBookList();
  }

  getAssignedBookList(){
    return [{
      'id':1,
      'bookid':11,
      'userid':12,
      'createdtime':'7:35',
      'updatedtime':'6:35',
      'isshow':true, 
      'subject':'tech',
      'totalcount':30,
      'availablecount':10},

      {
        'id':2,
        'bookid':21,
        'userid':12,
        'createdtime':'8:35',
        'updatedtime':'2:35',
        'isshow':true, 
        'subject':'techies',
        'totalcount':40,
        'availablecount':20},
    ]
  }
}
