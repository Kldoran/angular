import { AboutComponent } from './about.component';
import { BookListComponent }
    from './books/book-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: BookListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule {
}
