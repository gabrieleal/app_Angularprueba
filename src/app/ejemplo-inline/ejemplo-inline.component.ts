import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-inline',
  template: `
    <p>
      ejemplo-inline works!
    </p>
  `,
  styles: [
    "p{ color : 'red' }"
  ]
})
export class EjemploInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
