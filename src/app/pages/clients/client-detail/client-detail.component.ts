import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  protected clientID: number;

  constructor(
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
          this.clientID = parseInt(params.get('username'));
      });
  }

}
