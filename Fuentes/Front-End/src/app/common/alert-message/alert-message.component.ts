import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-alert',
  template:
    `<div class="{{class}}">{{message}}</div>`
})
export class AlertComponent {
  @Input() public message: any;
  @Input() public class: any;
}
