import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'app-simple-color-editor',
  templateUrl: './simple-color-editor.component.html',
  styleUrls: ['./simple-color-editor.component.scss']
})
export class SimpleColorEditorComponent extends DefaultEditor implements AfterViewInit {

  colorRegex = /#[A-Fa-f0-9]{6}/;

  @ViewChild('color', { static: false }) color: ElementRef;
  @ViewChild('htmlValue', { static: false }) htmlValue: ElementRef;

  ngAfterViewInit() {
    this.color.nativeElement.value = this.cell.getValue();
  }

  updateValue() {
    const color = this.color.nativeElement.value;
    if(color && color.toString().match(this.colorRegex))
      this.cell.newValue = color;
  }

  getColor(): string {
    return this.htmlValue.nativeElement.getAttribute('value');
  }

}
