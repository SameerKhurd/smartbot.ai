import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { QueryService } from 'src/app/services/query.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'si-layout-inner'
  }
})
export class HomeComponent implements OnInit {
  messageList: any = [];
  messageLoading = false;
  query = '';

  constructor(
    public dataService: DataService,
    private queryService: QueryService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    ('');
  }

  sampleQuestions = [
    `Could you provide some
  insights on what I can
  consider for asset tracking?`,
    `
  I'm looking for an building
  management software that
  can help me maintain asset
  performance and reduce
  time and labor costs? Can
  you povide some
  references?`,
    `I am on the Heathcare
    market and looking for a
    way to reduce energy costs
    using data`
  ];

  onClearChat(): void {
    this.messageList = [];
  }

  onSampleQuestionSelect(sampleQuestion: string): void {
    this.query = sampleQuestion;
    this.onSend();
  }

  onSend(): void {
    this.messageLoading = true;
    this.messageList.push({
      role: 'user',
      content: this.query
    });

    const payload = {
      query: this.query
    };

    this.query = '';


    this.queryService.sendQuery(payload).subscribe({
      next: (result: any) => {
        this.messageLoading = false;

        this.messageList.push({
          role: 'system',
          content: result.message,
          image: this.sanitizer.bypassSecurityTrustResourceUrl(
            `data:image/png;base64, ${result.image}`
          )
        });
        console.log(result);
      },
      error: (error: any) => {
        this.messageLoading = false;

        // this.showToast(
        //   'danger',
        //   'Error',
        //   'Error while loading Application project list.',
        //   false,
        //   false
        // );
        throw error;
      }
    });
  }
}
