import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService, Product } from '../../core/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page2',
  imports: [CommonModule, RouterModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  items$: Observable<Product[]>;
  constructor(private router: Router, private dataService: DataService) {
    this.items$ = this.dataService.readData();
  }

  goMain(){
    this.router.navigateByUrl("/")
  }
}
