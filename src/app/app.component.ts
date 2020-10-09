import { Component } from '@angular/core';
import { element } from 'protractor';
import { Sampleclass } from './sampleclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   

  array1: Sampleclass[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 11, name: 'Dr Nice' },
    { id: 11, name: 'Dr Nice' },
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 12, name: 'Narco' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  array2: Sampleclass[] = [
   
  ];

  addNew() {
    debugger;
    //console.log(this.array1);

    this.array1.forEach((ar1element) => {
      if (!this.array2.some((ar2element) => ar2element.name === ar1element.name)) {
        this.array2.push(ar1element);
      }
    });
     console.log(this.array2);

   
  }
 
}
