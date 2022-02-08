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
  title: string = '';
  content: string = '';
  
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private location: Location,
  ) {}

  onChange (e: Event, type: string) {
    const value: string = (e.target as HTMLInputElement).value;
    return (this as any)[type] = value;
  }

  onClickWriteButton() {
    const body = {
      title: this.title,
      content: this.content,
      created_at: dayjs().format("YYYY.MM.DD HH:mm:sss"),
    }
    
    this.apiService.addContent(body).subscribe(() => this.router.navigate(['/home']))
  }

  onClickBackButton () {
    this.location.back()
  }
}