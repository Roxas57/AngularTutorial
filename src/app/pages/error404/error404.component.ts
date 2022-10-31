import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      error404 works!
    </p>
  `,
  styles: [
  ]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
