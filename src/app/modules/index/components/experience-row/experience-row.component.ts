import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import EXPERIENCES_QUERY from '../../../../apollo/queries/experience/experiences';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mt-experience-row',
  templateUrl: './experience-row.component.html'
})
export class ExperienceRowComponent implements OnInit, OnDestroy {
  data: any = {};
  loading = true;
  errors: any;

  private queryProjects: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.queryProjects = this.apollo
      .watchQuery({
        query: EXPERIENCES_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
  ngOnDestroy() {
    this.queryProjects.unsubscribe();
  }
}
