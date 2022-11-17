export class Menus {
    Id: Number = 0;
    Menu: string = '';
    Active: Number = 1;
    CreatedBy: string = '';
    CreatedDate: string = '';
    UpdatedBy: string = '';
    UpdatedDate: string = '';
    submenu: Array<submenu> | any;
}

export class submenu {
    Id: Number = 1;
    MenuId: Number = 1;
    SubMenu: string = '';
    Active: Number = 1;
    CreatedBy: string = '';
    CreatedDate: string = '';
    UpdatedBy: string = '';
    UpdatedDate: string = '';

}


export class Menussubmenu {
    flag: Number = 1;
    Message: string = '';
    data: Array<Menus> | any;
}