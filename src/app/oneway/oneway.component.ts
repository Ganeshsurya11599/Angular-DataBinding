import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {
  dontshow = true;
  data:any={
    'name':'',
    'email':'',
    'contact':''
  }
  constructor(
  ) { }

  ngOnInit() {
  }
add(value){
  this.data.name = value.name;
  this.data.email = value.email;
  this.data.contact = value.contact;
}

}
