import { Component, OnInit } from '@angular/core';
import {ColumnComponent} from "../column/column.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  newColumnForm = new FormGroup({
    columnName: new FormControl('')
  });
  allColumns: ColumnComponent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createNewColumn(): void {
    const newColumn = new ColumnComponent();
    newColumn.name = this.newColumnForm.controls['columnName'].value;
    this.allColumns.push(newColumn);
    this.newColumnForm.setValue({columnName: ''});
    console.log(this.allColumns);
  }
}
