import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit{
  cols!:any;
  booksList!:any;
  createBooksForm!:FormGroup;

  constructor(){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'authorName', header: 'Author Name' },
      { field: 'publisher', header: 'Publisher' },
      { field: 'year', header: 'Year' },
      { field: 'category', header: 'Category' },
      { field: 'totalCount', header: 'Total Count' },
      { field: 'availableCount', header: 'Available Count' },
    ];
  }
  
  ngOnInit(): void {
    this.booksList = this.getBooksList();
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
    return [{
             'id':1,
             'title':'Angular',
             'authorName':'Google',
             'publisher':'Google.com',
             'year':2012,
             'category':'Technology', 
             'totalCount':300,
             'availableCount':217},
             {
              'id':2,
              'title':'React',
              'authorName':'Meta',
              'publisher':'Meta.com',
              'year':2013,
              'category':'Technology', 
              'totalCount':340,
              'availableCount':117},
              {
                'id':3,
                'title':'Java',
                'authorName':'Oracle',
                'publisher':'Oracle.com',
                'year':2014,
                'category':'Technology', 
                'totalCount':600,
                'availableCount':317},
                {
                  'id':4,
                  'title':'Pega',
                  'authorName':'PSA',
                  'publisher':'Psa.com',
                  'year':2012,
                  'category':'Technology', 
                  'totalCount':200,
                  'availableCount':17},
                  {
                    'id':5,
                    'title':'SAP',
                    'authorName':'SAP',
                    'publisher':'sap.com',
                    'year':2002,
                    'category':'Technology', 
                    'totalCount':304,
                    'availableCount':27}
    ]
  }

}
