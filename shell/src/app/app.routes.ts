import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: 'pruebaViernes',
        loadChildren: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4205/remoteEntry.js',
            exposedModule: './RodrigoModule',
        }).then((m) => m.RodrigoModule),
    },
];
