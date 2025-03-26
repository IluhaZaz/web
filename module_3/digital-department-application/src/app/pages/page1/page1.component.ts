import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page1',
  imports: [CommonModule, RouterModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component implements OnInit{
  id: string | null = "0";
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
