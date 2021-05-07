import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollResultsComponent } from './poll-results/poll-results.component';
import { OpinionPollQuestionsComponent } from './opinion-poll-questions/opinion-poll-questions.component';
import { OpinionPollService } from './opinion-poll.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    PollResultsComponent,
    OpinionPollQuestionsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: OpinionPollQuestionsComponent },
      { path: 'result-page', component: PollResultsComponent },
    ]),
  ],
  providers: [OpinionPollService],
  bootstrap: [AppComponent],
})
export class AppModule {}
