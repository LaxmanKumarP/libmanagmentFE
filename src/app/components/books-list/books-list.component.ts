import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit{
  cols!:any;
  booksList!:any;
  createBooksForm!:FormGroup;
  constructor(private sharedService:SharedService){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'author', header: 'Author Name' },
      { field: 'yearofmade', header: 'Year' },
      { field: 'totalcount', header: 'Total Count' },
      { field: 'avlblcount', header: 'Available Count' },
      { field: 'publisher', header: 'Publisher' },
      { field: 'subject', header: 'Subject' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'updatedBy', header: 'Updated By' },
    ];
  }
  
  ngOnInit(): void {
    // this.booksList = this.getBooksList();
    this.sharedService.getBooksList().subscribe(res=>{
      console.log(res,'res');
      this.booksList = res;
    })
    this.createBooksForm = new FormGroup({
    'booksDetails': new FormGroup({
      'title': new FormControl('',[Validators.required]),
      'author': new FormControl('',[Validators.required]),
      'yearofmade': new FormControl('',[Validators.required]),
      'totalcount': new FormControl('',[Validators.required]),
      'avlblcount': new FormControl('',[Validators.required]),
      'publisher': new FormControl('',[Validators.required]),
      'subject': new FormControl('',[Validators.required]),
      'createdBy': new FormControl('',[Validators.required]),
      'updatedBy': new FormControl('',[Validators.required])
    })
    })
  } 								

  onSubmit(){
    console.log('submit clicked');
  }

  
  getBooksList(){
    // return [{
    //          'id':1,
    //          'title':'Angular',
    //          'authorName':'Google',
    //          'publisher':'Google.com',
    //          'year':2012,
    //          'category':'Technology', 
    //          'totalCount':300,
    //          'availableCount':217},
    //          {
    //           'id':2,
    //           'title':'React',
    //           'authorName':'Meta',
    //           'publisher':'Meta.com',
    //           'year':2013,
    //           'category':'Technology', 
    //           'totalCount':340,
    //           'availableCount':117},
    //           {
    //             'id':3,
    //             'title':'Java',
    //             'authorName':'Oracle',
    //             'publisher':'Oracle.com',
    //             'year':2014,
    //             'category':'Technology', 
    //             'totalCount':600,
    //             'availableCount':317},
    //             {
    //               'id':4,
    //               'title':'Pega',
    //               'authorName':'PSA',
    //               'publisher':'Psa.com',
    //               'year':2012,
    //               'category':'Technology', 
    //               'totalCount':200,
    //               'availableCount':17},
    //               {
    //                 'id':5,
    //                 'title':'SAP',
    //                 'authorName':'SAP',
    //                 'publisher':'sap.com',
    //                 'year':2002,
    //                 'category':'Technology', 
    //                 'totalCount':304,
    //                 'availableCount':27}
    // ]
  }

}
