import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { User } from 'src/app/@models/user.model';
import { NbToastrService } from '@nebular/theme';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

    searchUser: string;
    isSearching: boolean;
    pagination: {id,url}[];
    
    clients: User[];

    constructor(
        private service: UsersService,
        // private router: Router,
        private toastrService: NbToastrService,
    ) {
        this.pagination = [
            { id:1, url:'#'}
        ]
    }

    ngOnInit() {
        this.onSearch();
    }

    onSearch() {
        this.isSearching = true;
        if( !this.searchUser )
            this.searchUser = '';

        this.service.search(this.searchUser).subscribe(
            clients => {
                this.isSearching = false;
                this.clients = [];
                for(const i in clients['results']) {
                    this.clients.push(
                        new User(clients['results'][i])
                    );
                }
            },
            err => {
                this.isSearching = false;
                this.toastrService.show(
                    'Verifique a internet e se o erro persistir, chame o suporte!',
                    'Erro de conexão com o servidor',
                    {
                        duration: 10*1000,
                        status: 'warning',
                    }
                );
            }
        );
    }

}
