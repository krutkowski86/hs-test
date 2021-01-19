import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-feature',
  templateUrl: './auth-feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFeatureComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
