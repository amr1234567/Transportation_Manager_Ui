import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Embed, IReportEmbedConfiguration, models, service } from 'powerbi-client';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';


@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrl: './pi.component.scss'
})
export class PiComponent implements OnInit {
  phaseEmbedding = false;

  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: '',
    tokenType: models.TokenType.Embed,
    accessToken: '',
    settings: undefined,
  };
  @ViewChild(PowerBIReportEmbedComponent)
  reportObj!: PowerBIReportEmbedComponent;
  eventHandlersMap = new Map([
    [
      'loaded',
      () => {
        const report = this.reportObj.getReport();
        report.setComponentTitle('Embedded report');
      },
    ],
    ['rendered', () => console.log('Report has rendered')],
    [
      'error',
      (event?: service.ICustomEvent<any>) => {
        if (event) {
          console.error(event.detail);
        }
      },
    ],
    ['visualClicked', () => console.log('visual clicked')],
    ['pageChanged', (event) => ''],
  ]) as Map<
    string,
    (event?: service.ICustomEvent<any>, embeddedEntity?: Embed) => void | null
  >;

  constructor() { }

  ngOnInit() {
    this.embedReport();
  }

  embedReport() {
    this.reportConfig = {
      ...this.reportConfig,
      accessToken: 'your token',
      id: 'your reportId',
      embedUrl: 'your embedUrl',
    };
  }

}