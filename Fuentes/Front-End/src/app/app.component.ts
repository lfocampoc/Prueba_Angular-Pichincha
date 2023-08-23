import { Component } from '@angular/core';
import { SessionService } from '@services/session-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'productos';
  public data = {
    token: 'jtk-aca-iria-tokenJWT',
    usuario: 'Luisa Fernanda Ocampo'
  }

  constructor(
    private sessionService: SessionService
  ) {
    this.sessionService.saveSessionData(this.data);
  }
}
