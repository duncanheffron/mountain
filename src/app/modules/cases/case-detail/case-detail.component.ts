import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import PROJECT_QUERY from '../../../apollo/queries/case/case';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mt-case-detail',
  templateUrl: './case-detail.component.html'
})
export class CaseDetailComponent implements OnInit, OnDestroy {
  data: any = {};
  project: any = {};
  loading = true;
  errors: any;
  slug: any;

  private queryCase: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('slug');
      this.queryCase = this.apollo
        .watchQuery({
          query: PROJECT_QUERY,
          variables: {
            slug: this.slug
          }
        })
        .valueChanges.subscribe(result => {
          this.data = result.data;
          this.project = this.data.projectBySlug;
          this.loading = result.loading;
          this.errors = result.errors;
        });
    });
  }
  ngOnDestroy() {
    this.queryCase.unsubscribe();
  }

}
