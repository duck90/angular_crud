import { ApiServiceService } from './detail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface WritingElement {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  detail: any = null;
  
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getDetail();
  }

  getDetail () {
    const { url } = this.router.routerState.snapshot;
    const id = url.split('/')[2];
    this.apiService.getDetail(id).subscribe(response => {
      this.detail = response;
    })
  }
}