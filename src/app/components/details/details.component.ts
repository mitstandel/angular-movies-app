import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {

  constructor() { }

  ngOnChanges(): void {
    console.log('OnChanges is called');
  }

  ngOnInit(): void {
    console.log('OnInit is called');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit is called');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit is called');
  }
}