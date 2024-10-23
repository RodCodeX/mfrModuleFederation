import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'rodrigo',
        loadChildren: () =>
        import('./components/rodrigo/rodrigo.module').then((m) => m.RodrigoModule),
    },
];
