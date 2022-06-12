import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  feedback: string = '';
  sessionData: any;

  ngOnInit(): void {
    this.loadFeedbackLS();
  }

  saveFeedbackLS() {
    let data = { id: 1, name: this.feedback };
    localStorage.setItem('feedback', JSON.stringify(data));
    this.loadFeedbackLS();
  }

  loadFeedbackLS() {
    let data: any = localStorage.getItem('feedback');
    this.sessionData = JSON.parse(data);

  }

}
