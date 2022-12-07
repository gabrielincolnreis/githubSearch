import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubServiceService } from 'src/app/core/services/github-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userName: string;
  profile: any;
  repository: any;
  searchControl = new FormControl('');

  constructor(
    private activatedRoute: ActivatedRoute,
    private gitHubService: GithubServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userName = params.get('userName');
    });
    this.gitHubService.findUser(this.userName).subscribe((response) => {
      this.profile = response;
    });
    this.gitHubService.findRepoByUser(this.userName).subscribe((response) => {
      this.repository = response;
    });
    console.log(this.repository);
  }

  public searchForUser() {
    this.router.navigate(['/profile/' + this.searchControl.value]);
  }
}
