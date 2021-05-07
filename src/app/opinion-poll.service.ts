import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpinionPollService {
  author: any = {
    Miguel: 0,
    Charles: 0,
    Tolkien: 0,
    Antoine: 0,
  };
  constructor() {}
}
