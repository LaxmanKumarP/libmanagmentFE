import { Component } from '@angular/core';


@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrl: './books-form.component.scss'
})
export class BooksFormComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
