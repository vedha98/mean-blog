import { Component, OnInit } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
// add image resize module
import ImageResize from 'quill-image-resize-module';
import Quill from 'quill';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
