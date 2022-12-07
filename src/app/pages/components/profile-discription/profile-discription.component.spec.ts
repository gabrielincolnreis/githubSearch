import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDiscriptionComponent } from './profile-discription.component';

describe('ProfileDiscriptionComponent', () => {
  let component: ProfileDiscriptionComponent;
  let fixture: ComponentFixture<ProfileDiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDiscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
