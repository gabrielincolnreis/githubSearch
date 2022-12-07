import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-discription',
  templateUrl: './profile-discription.component.html',
  styleUrls: ['./profile-discription.component.scss'],
})
export class ProfileDiscriptionComponent implements OnInit {
  @Input('profileInfo') public profileInfo: any;
  constructor() {}

  ngOnInit(): void {}
}
