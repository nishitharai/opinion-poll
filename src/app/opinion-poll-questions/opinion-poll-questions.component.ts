import { Component, OnInit } from '@angular/core';
import { OpinionPollService } from './../opinion-poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opinion-poll-questions',
  templateUrl: './opinion-poll-questions.component.html',
  styleUrls: ['./opinion-poll-questions.component.css'],
})
export class OpinionPollQuestionsComponent implements OnInit {
  selectedAuthor = '';
  constructor(private service: OpinionPollService, private router: Router) {}

  authorSelected() {
    if (this.selectedAuthor == 'Miguel') {
      this.service.author.Miguel = this.service.author.Miguel + 1;
    }
    if (this.selectedAuthor == 'Charles') {
      this.service.author.Charles = this.service.author.Charles + 1;
    }
    if (this.selectedAuthor == 'Tolkien') {
      this.service.author.Tolkien = this.service.author.Tolkien + 1;
    }
    if (this.selectedAuthor == 'Antoine') {
      this.service.author.Antoine = this.service.author.Antoine + 1;
    }
  }

  ngOnInit(): void {}

  viewResult() {
    console.log('sbfj');
    this.router.navigate(['/result-page']);
  }
}
