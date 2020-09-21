import { Component } from '@angular/core';
import { version } from '../../../../../package.json';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
     Donated to <b>CICT</b> with ♥ by
      <b><a href="https://covidsim.team/about-us" target="_blank">covidsim.team</a> Devs</b>
    </span>
    <div class="socials">
      <a href="https://github.com/covidsimteam" target="_blank" class="ion ion-social-github"></a>
      <span class="version">
        v{{appVersion}}
      </span>
    </div>
  `,
})
export class FooterComponent {
  public appVersion: string = version;
}
