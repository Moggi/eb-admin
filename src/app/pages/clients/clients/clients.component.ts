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
  isUpdatingData: boolean;
  pagination: {id,url}[];

  settings = {
    noDataMessage: 'Nenhum dado encontrado',
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    delete: {
      confirmDelete: true,
    },
    columns: {
      username: {
        title: 'Nome de usuário'
      },
      first_name: {
        title: 'Primeiro nome'
      },
      last_name: {
        title: 'Último nome'
      },
      email: {
        title: 'Email'
      },
      phone: {
        title: 'Telefone'
      },
      cellphone: {
        title: 'Celular'
      },
    }
  };

  data: User[] = [];

  constructor(
    private service: UsersService,
    private toastrService: NbToastrService,
  ) {
    // this.pagination = [
    //     { id:1, url:'#'}
    // ]
  }

  ngOnInit() {
    this.list();
  }

  createConfirm(event:{newData,source,confirm}) {
    this.service.add(event.newData).subscribe(
      response => {
        var new_user = new User(response);
        event.confirm.resolve(new_user);
      },
      err => {
        // console.log('err');
        // console.log(err);
        this.toastrService.show(
            'Verifique os dados',
            'Erro. Operação não concluida.',
            {
                duration: 10*1000,
                status: 'warning',
            }
        );
        event.confirm.reject();
      }
    );
  }

  deleteConfirm(event:{data,source,confirm}) {
    var username: string = prompt('Para confirmar a DELEÇÃO, digite o nome de usuário a ser deletado');
    if(username.toLowerCase() != event.data.username.toLowerCase()) {
      event.confirm.reject();
      return;
    }
    this.service.delete(event.data.id).subscribe(
      response => {
        event.confirm.resolve();
      },
      err => {
        // console.log('err');
        // console.log(err);
        this.toastrService.show(
          'Verifique os dados',
          'Erro. Operação não concluida.',
          {
            duration: 10*1000,
            status: 'warning',
          }
        );
        event.confirm.reject();
      }
    );
  }

  editConfirm(event:{data,newData,source,confirm}) {
    this.isUpdatingData = true;
    this.service.update(event.data.id, event.newData).subscribe(
      response => {
        this.isUpdatingData = false;
        event.confirm.resolve(new User(response));
      },
      err => {
        // console.log('err');
        // console.log(err);
        this.isUpdatingData = false;
        this.toastrService.show(
          'Verifique os dados',
          'Erro. Operação não concluida.',
          {
            duration: 10*1000,
            status: 'warning',
          }
        );
        event.confirm.reject();
      }
    );
  }

  onSearch() {
    this.isUpdatingData = true;
    if( !this.searchUser )
      this.searchUser = '';

    this.service.search(this.searchUser).subscribe(
      clients => {
        this.isUpdatingData = false;
        this.data = [];
        for(const i in clients['results']) {
          var user = new User(clients['results'][i]);
          this.data.push(user);
        }
      },
      err => {
        this.isUpdatingData = false;
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
  
  list() {
    this.isUpdatingData = true;

    this.service.list().subscribe(
      clients => {
        this.isUpdatingData = false;
        this.data = [];
        for(const i in clients['results']) {
          var user = new User(clients['results'][i]);
          this.data.push(user);
        }
      },
      err => {
        this.isUpdatingData = false;
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
