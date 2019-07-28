import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
title = "PropertyBinding";
name = "These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata.";
  constructor() { }

  ngOnInit() {
  }

}
