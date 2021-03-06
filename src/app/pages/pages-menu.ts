import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Home',
        icon: 'home',
        link: '/pages',
    },
    {
        title: '',
        group: true,
    },
    {
        title: 'Usuários',
        icon: 'people',
        children: [
            {
                title: 'Clientes',
                link: '/pages/clientes',
            },
            {
                title: 'Profissionais',
                link: '/pages/profissionais',
            },
            {
                title: 'Administração',
                // link: '/pages/permissoes',
            },
        ],
    },
    {
        title: 'Agenda',
        icon: 'cube',
        children: [
            {
                title: 'Agenda',
                // link: '/pages/livros',
            },
            {
                title: 'Serviços',
                link: '/pages/servicos',
            },
        ],
    },
    {
        title: 'Gerencial',
        icon: 'settings',
        children: [
            {
                title: 'Relatórios',
                // link: '/pages/relatorios',
            },{
                title: 'Resetar Senha',
                // link: '/pages/senha',
            },
        ],
    },
    {
        title: '',
        group: true,
    },
    {
        title: 'Conta',
        icon: 'lock',
        children: [
            {
                title: 'Entrar',
                link: '/auth/login',
            },
            {
                title: 'Desconectar',
                link: '/auth/logout',
            },
        ],
    },
];
