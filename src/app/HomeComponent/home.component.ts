import { ApiServiceService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


interface WritingElement {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

@Component({
  selector: 'home',
  inputs: ['displayedColumns', 'writingList', 'title', 'content'],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'content', 'created_at'];
  writingList: WritingElement[] = [];
  title: string | null = '';
  content: string | null = '';
  
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getWritings();
  }

  getWritings() {
    this.apiService.getWritings().subscribe((res: WritingElement[]) => {
      this.writingList = res;
    })
  }

  onClickRow (id: number) {
    this.router.navigate([`/detail/${id}`]);
  }

  onClickWriteButton () {
    this.router.navigate([`/write`]);
  }
}