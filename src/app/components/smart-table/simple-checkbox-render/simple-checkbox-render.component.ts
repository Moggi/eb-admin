import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  templateUrl: './simple-checkbox-render.component.html',
})
export class SimpleCheckboxRenderComponent implements ViewCell, OnInit {

  renderValue: boolean;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = false;
    if(this.value)
      this.renderValue = this.value.toString() == 'true'? true:false;
  }

}
