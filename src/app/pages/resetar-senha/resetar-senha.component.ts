import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-resetar-senha',
    templateUrl: './resetar-senha.component.html',
    styleUrls: ['./resetar-senha.component.scss']
})
export class ResetarSenhaComponent implements OnInit {

    searchString: string;

    constructor(
        // private studentsService: StudentsService,
        private toastrService: NbToastrService,
        // private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        // this.route.paramMap.subscribe(params => {
        //     this.searchString = '';
        //     let student_id = parseInt(params.get('id'));
        //     if(student_id && !isNaN(student_id) && student_id>0) {
        //         this.searchString = parseInt(params.get('id')).toString();
        //         // this.onSearch();
        //     }
        // });
    }


}
