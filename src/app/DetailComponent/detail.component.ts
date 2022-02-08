import { ApiServiceService } from './detail.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

import { Router } from '@angular/router';
import * as dayjs from 'dayjs';

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
  postId: string | null = null;
  title: string = '';
  content: string = '';
  
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

    this.apiService.getDetail(id).subscribe((res: WritingElement) => {
      this.title = res.title;
      this.content = res.content;
    })
  }

  onChange (e: Event, type: string) {
    const value: string = (e.target as HTMLInputElement).value;
    return (this as any)[type] = value;
  }

  onClickModifyButton() {
    if (!this.postId) return;

    const body = {
      title: this.title,
      content: this.content,
      created_at: dayjs().format("YYYY.MM.DD HH:mm:sss"),
    }
    
    this.apiService.modifyPost(this.postId, body).subscribe(() => this.router.navigate(['/home']))
  }

  onClickBackButton () {
    this.location.back()
  }

  onClickDeleteButton() {
    if (!this.postId) return;

    this.apiService.deletePost(this.postId).subscribe(() => this.router.navigate(['/home']))
  }
}