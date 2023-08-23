
import { HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders() };

const Config = {
  api: {
    baseUrl: 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros',
    options: httpOptions,
    timeout: 3000,
    authorId: '123456'
  },
  translatesPathlibrary: './assets/i18n/'
}


httpOptions.headers
  = httpOptions.headers
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json; text/plain')
    .set('authorId', Config.api.authorId);


export { Config };
