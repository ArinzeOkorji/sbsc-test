import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input()
  brand!: string;
  @Input()
  color!: string;
  @Input()
  background!: string;
  @Input()
  current!: number;
  @Input()
  max!: number;
  @Input()
  containerBackground = '#fff';
  @Input()
  // tslint:disable-next-line: object-literal-key-quotes
  cardBackground: any = {'background': '#fff'};
  constructor() { }

  ngOnInit(): void {
  }

}
