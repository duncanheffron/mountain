import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-experience-card-skeleton',
  templateUrl: './experience-card-skeleton.component.html'
})
export class ExperienceCardSkeletonComponent implements OnInit {
  @Input() experience;

  ngOnInit() {}
}
