import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/@models/user.model';
import { NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

    requestedReport: boolean;
    isSearching: boolean;
    searchString: string;

    user: User;
    
    pdf: Blob;
    pdfURL;

    fromForm = new Date();
    toForm = new Date();

    constructor(
        private usersService: UsersService,
        private toastrService: NbToastrService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.searchString = '';
            let student_id = parseInt(params.get('id'));
            if(student_id && !isNaN(student_id) && student_id>0) {
                this.searchString = parseInt(params.get('id')).toString();
                this.onSearch();
            }
        });
    }

    onSearch() {
        // this.isSearching = true;
        // this.user = null;
        // if( !this.searchString )
        //     this.searchString = '';
        
        // let student_id = parseInt(this.searchString);
        // if(!student_id || isNaN(student_id) || student_id<=0) {
        //     this.isSearching = false;
        //     return;
        // }
        // this.studentsService.searchByID(student_id).subscribe(
        //     student => {
        //         this.isSearching = false;
        //         // console.log(student);
        //         this.user = new Student(student['id'], student['matricula'],
        //             student['school'], student['user']['email'],
        //             student['user']['first_name'], student['user']['last_name']);
        //     },
        //     err => {
        //         this.isSearching = false;
        //         // console.log(err);

        //         if(err.status == 404) {
        //             this.toastrService.show(
        //                 'Verifique o ID do aluno novamente!',
        //                 'Aluno não encontrado em sua escola',
        //                 {
        //                     duration: 10*1000,
        //                     status: 'danger',
        //                 }
        //             );    
        //         }
        //         else {
        //             this.toastrService.show(
        //                 'Verifique a internet e se o erro persistir, chame o suporte!',
        //                 'Erro de conexão com o servidor',
        //                 {
        //                     duration: 10*1000,
        //                     status: 'warning',
        //                 }
        //             );
        //         }
        //     }
        // );
    }

    onGenerate() {
        // this.requestedReport = true;
        // this.pdf = null;
        // let date_offset = -(new Date()).getTimezoneOffset();
        // let data = {
        //     pk: this.student.id,
        //     date_start: this.fromForm.toISOString().substr(0,10),
        //     date_end: this.toForm.toISOString().substr(0,10),
        //     // date_start: this.fromForm.toLocaleDateString("en-US"),
        //     // date_end: this.toForm.toLocaleDateString("en-US"),
        //     offset: date_offset,
        // };
        
        // this.studentsService.generateReport(data).subscribe(
        //     pdf_data => {
        //         this.requestedReport = false;
                
        //         this.pdf = new Blob([pdf_data], {type: 'application/pdf'});
        //         this.pdfURL = URL.createObjectURL(this.pdf);
        //         this.pdfURL = this.sanitizer.bypassSecurityTrustUrl(this.pdfURL);
        //         // window.open(fileURL, '_blank');
        //         // let w = window.open('', '_blank');
        //     },
        //     err => {
        //         this.requestedReport = false;
        //         console.log('err');
        //         console.log(err);
        //         if( err.status == 400 ) {
        //             this.toastrService.show(
        //                 'Verifique as datas e se o erro persistir, chame o suporte!',
        //                 'Erro nos dados enviados',
        //                 {
        //                     duration: 10*1000,
        //                     status: 'danger',
        //                 }
        //             );
        //         }
        //         else {
        //             this.toastrService.show(
        //                 'Verifique a internet e se o erro persistir, chame o suporte!',
        //                 'Erro de conexão com o servidor',
        //                 {
        //                     duration: 10*1000,
        //                     status: 'warning',
        //                 }
        //             );
        //         }
        //     }
        // );
    }

    onSave() {
        let reader = new FileReader();
        reader.onload = ()=> {
            window.location.href = this.pdfURL;
        }
    
        reader.readAsDataURL(this.pdf);
          
        // window.open(this.pdfURL, '_blank');
    }

}
