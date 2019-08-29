import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ProfessionalsService } from 'src/app/services/professional.service';
import { Professional } from 'src/app/@models/professional.model';
import { SimpleCheckboxRenderComponent } from 'src/app/components/smart-table/simple-checkbox-render/simple-checkbox-render.component';


@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {

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
        title: 'Nome de Usuário',
        editable: false,
      },
      // id: {
      //   title: 'ID de profissional',
      //   editable: false,
      // },
      services: {
        title: 'Serviços',
        // type: 'custom',
        // renderComponent: CustomCheckboxRenderComponent,
        // filter: {
        //   type: 'list',
        //   // config: {
        //   //   true: 'true',
        //   //   false: 'false',
        //   //   resetText: 'Limpar',
        //   // },
        // },
        editor: {
          type: 'list'
        },
      },
      is_available: {
        title: 'Disponível',
        type: 'custom',
        renderComponent: SimpleCheckboxRenderComponent,
        filter: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
            resetText: 'Limpar',
          },
        },
        editor: {
          type: 'checkbox'
        },
        filterFunction: this.isAvailableFilter,
      },
    }
  };

  data: Professional[] = [];

  constructor(
    private service: ProfessionalsService,
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
        var new_user = new Professional(response);
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
        event.confirm.resolve(new Professional(response));
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
  
  list() {
    this.isUpdatingData = true;

    this.service.list().subscribe(
      clients => {
        this.isUpdatingData = false;
        this.data = [];
        for(const i in clients['results']) {
          var user = new Professional(clients['results'][i]);
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

  isAvailableFilter(cell: any, search: string): boolean {
    return cell == (search == 'true'?true:false);
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
          var user = new Professional(clients['results'][i]);
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
