import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
title = "EventBinding";
name = "Hi,I am Ganeshsurya";
dontshow = true
  constructor() { }

  ngOnInit() {
  }

}
