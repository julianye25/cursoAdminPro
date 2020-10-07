import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;

  constructor(
    private Router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.getDataRoute().subscribe((data) => {
      console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo,
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {}

  getDataRoute() {
    return this.Router.events.pipe(
      filter((evento) => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
}
