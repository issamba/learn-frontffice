import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyComponentComponent} from "./components/my-component/my-component.component";
import {PublicationComponent} from "./components/publication/publication.component";
import {TrendingPublicationComponent} from "./components/trending-publication/trending-publication.component";
import {MyPublicationsComponent} from "./components/my-publications/my-publications.component";

const routes: Routes = [{
  path: "",
  component: MyComponentComponent,
}, {
  path: "publication",
  component: PublicationComponent
}, {
  path: "trending",
  component: TrendingPublicationComponent,
}, {
  path: "myPublications",
  component: MyPublicationsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
