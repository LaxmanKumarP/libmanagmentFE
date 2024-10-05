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
  selectedRowData:any;
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
    this.getBooksList();
    this.createForm();
  } 								

  //get books list
  getBooksList(){
    this.sharedService.getBooksList().subscribe(res=>{
      console.log(res,'res');
      this.booksList = res;
    })
  }

  //Form Creation
  createForm(){
    this.createBooksForm = new FormGroup({
      'title': new FormControl('',[Validators.required]),
      'author': new FormControl('',[Validators.required]),
      'yearofmade': new FormControl('',[Validators.required]),
      'totalcount': new FormControl('',[Validators.required]),
      'avlblcount': new FormControl('',[Validators.required]),
      'publisher': new FormControl('',[Validators.required]),
      'subject': new FormControl('',[Validators.required]),
      'createdBy': new FormControl('',[Validators.required]),
      'updatedBy': new FormControl('',[Validators.required]),
    })
  }


  onSubmit(){
    if (this.createBooksForm.valid){
      // const formValues = this.createBooksForm.getRawValue();
      // this.sendFormValues(formValues);
        this.submitFormDetails()
    }else{
      console.log('Form is invalid');
    }
    }

  sendFormValues(formValues: any){
    this.sharedService.createBookDetails(formValues).subscribe(res =>{
      console.log(res,'chek post response');
    })
  }

  onEdit(rowdata:any){
    console.log('Captured Row:', rowdata);
    this.selectedRowData = rowdata;
    this.createBooksForm.patchValue({
      'title': rowdata.title,
      'author':rowdata.author,
      'yearofmade': rowdata.yearofmade,
      'totalcount': rowdata.totalcount,
      'avlblcount': rowdata.avlblcount,
      'publisher': rowdata.publisher,
      'subject': rowdata.subject,
      'createdBy': rowdata.createdBy,
      'updatedBy': rowdata.updatedBy
    })
  }

  submitFormDetails(){
    let formValues = this.createBooksForm.getRawValue();
    this.sharedService.createBookDetails(formValues).subscribe(res =>{
      this.getBooksList();
      this.createBooksForm.reset();
    });
  }

  updateFormDetails(){
    let updatedFormDetails = this.createBooksForm.getRawValue();
    updatedFormDetails['id'] = this.selectedRowData.id;
    this.sharedService.updateBookDetails(updatedFormDetails).subscribe(res =>{
    this.getBooksList();
    this.createBooksForm.reset();
    })
  }
  onUpdate(){
   this.updateFormDetails();
  }

  onDelete(){
    
  }
}
