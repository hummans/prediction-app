import {Component,} from '@angular/core';


@Component({
  selector: 'sc-add-match',
  styles: [`
    a {
      color: #21BA45;
      cursor: pointer;
      font-size: 16px;
    }

    a:hover {
      text-decoration: underline;
    }
  `],
  template: `
    <div class="ui container">
      <a class="green" (click)="showAddMatchModal()">Add new match</a>
    </div>
  `
})
export class AddMatchComponent {

  // todo
  public showAddMatchModal() {
    console.log('show modal');
  }

}
