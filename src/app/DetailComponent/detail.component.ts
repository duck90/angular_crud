import { ApiServiceService } from './detail.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

import { Router } from '@angular/router';
import * as dayjs from 'dayjs';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  postId: string | null = null;
  title: string | null = '';
  content: string | null = '';
  
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getDetail();
  }

  getDetail () {
    const { url } = this.router.routerState.snapshot;
    const id = url.split('/')[2];
    this.postId = id;

    this.apiService.getDetail(id).subscribe((res: any) => {
      this.title = res.title;
      this.content = res.content;
    })
  }

  onChange (e: any, type: string) {
    switch (type) {
      case 'title':
        this.title = e.target.value;
        break;
      case 'content':
        this.content = e.target.value;
        break;
      default:
        break;
    }
  }

  onKeyUpEvent (e: any) {
    this.content = e.target.value;
  }

  onClickModifyButton() {
    if (!this.postId) return;

    const body = {
      title: this.title,
      content: this.content,
      created_at: dayjs().format("YYYY.MM.DD HH:mm:sss"),
    }
    
    this.apiService.modifyPost(this.postId, body).subscribe((res: any) => {
      this.router.navigate(['/home']);
    })
  }

  onClickBackButton () {
    this.location.back()
  }

  onClickDeleteButton() {
    if (!this.postId) return;

    this.apiService.deletePost(this.postId).subscribe((res: any) => {
      this.router.navigate(['/home']);
    })
  }
}