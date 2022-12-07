import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  @Input('repositoryInfo') public repositories: any;

  constructor() {}

  ngOnInit(): void {}
}
