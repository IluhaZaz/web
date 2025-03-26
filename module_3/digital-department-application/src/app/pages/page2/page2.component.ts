import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [CommonModule, RouterModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  constructor(private router: Router) {}

  goMain(){
    this.router.navigateByUrl("/")
  }
}
