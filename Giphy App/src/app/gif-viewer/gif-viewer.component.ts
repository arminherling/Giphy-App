import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gif-viewer',
  templateUrl: './gif-viewer.component.html',
  styleUrls: ['./gif-viewer.component.css']
})
export class GifViewerComponent implements OnInit {
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
