import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedBooksListComponent } from './assigned-books-list.component';

describe('AssignedBooksListComponent', () => {
  let component: AssignedBooksListComponent;
  let fixture: ComponentFixture<AssignedBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignedBooksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
