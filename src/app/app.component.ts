import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-test';
  menuItems: MenuItem[] = [
    {
        label: 'Inicio',
        icon: "pi pi-clock",
        routerLink: "/inicio"
    },
    {
        label: 'Ver productos',
        icon: "pi pi-list",
        routerLink: "/productos"
    },
    {
        label: 'Administración',
        icon: "pi pi-cog",
        routerLink: "/administracion"
    }
];

}
