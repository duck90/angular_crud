import { ApiServiceService } from './write.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import * as dayjs from 'dayjs';

@Component({
  selector: 'write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})

export class WriteComponent {
  title: string | null = '';
  content: string | null = '';
  
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private location: Location,
  ) {}

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

  onClickWriteButton() {
    const body = {
      title: this.title,
      content: this.content,
      created_at: dayjs().format("YYYY.MM.DD HH:mm:sss"),
    }
    
    this.apiService.addContent(body).subscribe((res: any) => {
      this.router.navigate(['/home']);
    })
  }

  onClickBackButton () {
    this.location.back()
  }
}