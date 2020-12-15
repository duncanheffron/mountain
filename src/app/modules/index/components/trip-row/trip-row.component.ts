import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import TRAVELS_QUERY from '../../../../apollo/queries/travel/travels';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mt-trip-row',
  templateUrl: './trip-row.component.html'
})
export class TripRowComponent implements OnInit, OnDestroy {
  data: any = {};
  loading = true;
  errors: any;

  private queryProjects: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.queryProjects = this.apollo
      .watchQuery({
        query: TRAVELS_QUERY
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
