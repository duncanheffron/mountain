import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import PROJECTS_QUERY from '../../../../apollo/queries/case/cases';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mt-case-row',
  templateUrl: './case-row.component.html'
})
export class CaseRowComponent implements OnInit, OnDestroy {
  data: any = {};
  loading = true;
  errors: any;

  private queryProjects: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.queryProjects = this.apollo
      .watchQuery({
        query: PROJECTS_QUERY
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
