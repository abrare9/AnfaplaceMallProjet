import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  qrdata = 'Initial QR code data string';

  constructor() { }

  ngOnInit() {
  }

}
