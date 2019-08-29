import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Service } from 'src/app/@models/service.model';
import { ServicesService } from 'src/app/services/service.service';
import { SimpleCheckboxRenderComponent } from 'src/app/components/smart-table/simple-checkbox-render/simple-checkbox-render.component';
import { SimpleColorRenderComponent } from 'src/app/components/smart-table/simple-color-render/simple-color-render.component';
import { SimpleColorEditorComponent } from 'src/app/components/smart-table/simple-color-editor/simple-color-editor.component';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

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
      // id: {
      //   title: 'ID',
      //   editable: false,
      // },
      name: {
        title: 'Nome',
      },
      avg_price: {
        title: 'Valor médio',
      },
      avg_time: {
        title: 'Tempo médio',
      },
      is_type: {
        title: 'É tipo',
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
      },
      type_color: {
        title: 'Cor do tipo',
        type: 'custom',
        renderComponent: SimpleColorRenderComponent,
        filter: false,
        editor: {
          type: 'custom',
          component: SimpleColorEditorComponent,
        }
      },
      from_type: {
        title: 'Do tipo',
      },
    }
  };

  data = [];

  constructor(
    private service: ServicesService,
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
        var new_user = new Service(response);
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
    var username: string = prompt('Para confirmar a DELEÇÃO, digite o nome do serviço a ser deletado');
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
        event.confirm.resolve(new Service(response));
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
          var user = new Service(clients['results'][i]);
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
