import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-simple-color-render',
  templateUrl: './simple-color-render.component.html',
  styleUrls: ['./simple-color-render.component.scss']
})
export class SimpleColorRenderComponent implements ViewCell, OnInit {

  renderValue: string;
  colorRegex = /#[A-Fa-f0-9]{6}/i;

  @Input() value: string;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = '#ffffff';
    if(this.value && this.value.match(this.colorRegex))
      this.renderValue = this.value.toString();
  }

}
