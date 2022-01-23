import { ApiServiceService } from './api-service.service';
import { Component, OnInit } from '@angular/core';

interface WritingElement {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

@Component({
  selector: 'write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'content', 'createdAt'];
  writingList: WritingElement[] = [];
  title: string | null = '';
  content: string | null = '';
  
  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.getWritings();
  }

  getWritings() {
    this.apiService.getWritings().subscribe(response => {
      let result: any[] = [];
      result = result.concat(response);
      this.writingList = result;
    })
  }

  onChangeEvent(type: string, e: any) {
    console.log(type, e.target.value)
  }

  submit () {
    console.log(this.title, this.content);
  }
}