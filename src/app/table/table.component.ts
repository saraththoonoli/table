import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  showTable = false;
  
  users = [
    { "id": 1, "name": "John Doe", "age": 25, "city": "Example City" },
    { "id": 2, "name": "Jane Doe", "age": 30, "city": "Another City" },
    { "id": 3, "name": "Alice Smith", "age": 28, "city": "New Town" },
    { "id": 4, "name": "Bob Johnson", "age": 22, "city": "Old City" },
    { "id": 5, "name": "Eva Williams", "age": 35, "city": "Sunnyville" },
    { "id": 6, "name": "David Brown", "age": 26, "city": "Mountain View" },
    { "id": 7, "name": "Sophia Taylor", "age": 32, "city": "Harbor City" },
    { "id": 8, "name": "Michael Wilson", "age": 29, "city": "Riverdale" },
    { "id": 9, "name": "Olivia Martinez", "age": 31, "city": "Lakeview" },
    { "id": 10, "name": "Daniel Lee", "age": 24, "city": "Forest Hills" },
    { "id": 11, "name": "Ava Davis", "age": 27, "city": "Ocean Park" },
    { "id": 12, "name": "Christopher Miller", "age": 33, "city": "Hillcrest" },
    { "id": 13, "name": "Emily Wilson", "age": 23, "city": "Greenfield" },
    { "id": 14, "name": "Mason Brown", "age": 30, "city": "Valley Springs" },
    { "id": 15, "name": "Emma White", "age": 28, "city": "Pleasant Grove" },
    { "id": 16, "name": "Liam Harris", "age": 26, "city": "Maplewood" },
    { "id": 17, "name": "Isabella Turner", "age": 29, "city": "Golden Grove" },
    { "id": 18, "name": "Noah Clark", "age": 31, "city": "Stone Ridge" },
    { "id": 19, "name": "Grace Scott", "age": 25, "city": "Blue Valley" },
    { "id": 20, "name": "Alexander King", "age": 34, "city": "Redwood Falls" },
  ];

// Primary table style
  tableStyles = {
    'background-color': 'white',
    'font-style': 'normal',
    'color': 'black',
    'font-size': '16px',
    'border': '1px solid black',
  };

  // to Display the table 
  toggleTable() {
    this.showTable = !this.showTable;
  }
  //  change style when click
  changeTableStyles() {
    this.tableStyles['background-color'] = this.getRandomColor();
    this.tableStyles['font-style'] = 'italic';
    this.tableStyles['color'] = 'white';
    this.tableStyles['font-size'] = '18px';
    this.tableStyles['border'] = '2px dashed ' + this.getRandomColor();
  }
  // Generate a random hex color code
  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  // to clear all the styles
  clearStyle(){
    this.tableStyles['background-color'] = 'white';
    this.tableStyles['font-style'] = 'normal';
    this.tableStyles['color'] = 'black';
    this.tableStyles['font-size'] = '16px';
    this.tableStyles['border'] = '1px solid black';

  }
}
