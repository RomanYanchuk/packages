import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-library',
  template: `
    <p>data-table works! ROWS: {{ rows }} COLUMNS: {{ columns }}</p>
  `,
  styles: [],
})
export class TestLibraryComponent implements OnInit {
  @Input() columns: number;
  @Input() rows: number;
  
  constructor() {}

  ngOnInit(): void {}
}
