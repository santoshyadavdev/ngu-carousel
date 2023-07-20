import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';

const routes: Routes = [
  {
    path: 'banner',
    loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
  },
  {
    path: 'tile',
    loadChildren: () => import('./tile/tile.module').then(m => m.TileModule)
  },
  {
    path: 'tile-2-images',
    loadChildren: () =>
      import('./tile-2-images/tile-2-images.module').then(m => m.Tile2ImagesModule)
  },
  {
    path: 'banner-vertical',
    loadChildren: () =>
      import('./banner-vertical/banner-vertical.module').then(m => m.BannerVerticalModule)
  },
  {
    path: 'wrapped',
    loadChildren: () =>
      import('./wrapped/wrapped.module').then(m => m.WrappedModule)
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: '',
    redirectTo: 'tile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
