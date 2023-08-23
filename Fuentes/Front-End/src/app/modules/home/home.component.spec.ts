import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageHomeComponent } from './home.component';
import { HomeService } from '@services/home-services';
import { HttpClientModule } from '@angular/common/http';
import { ServiceUtils } from '@services/services-utils';
import { SessionService } from '@services/session-service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('PageHomeComponent', () => {
  let homeServiceSpy: jasmine.SpyObj<HomeService>;
  let routerSpy: jasmine.SpyObj<Router>
  let router: Router;;

  const mockProducts = [
    {
      "id": "trj-cr",
      "name": "Tarjetas de Crédito",
      "description": "TARJETA de consumo bajo la modalidad de crédito test",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2023-01-26T00:00:00.000+00:00",
      "date_revision": "2024-01-26T00:00:00.000+00:00"
    },
    {
      "id": "trj-crr",
      "name": "Tarjetas de Crédito",
      "description": "Tarjeta de consumo bajo la modalidad de crédito",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2023-02-01T00:00:00.000+00:00",
      "date_revision": "2024-02-01T00:00:00.000+00:00"
    }
  ];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ],
    declarations: [PageHomeComponent],
    providers: [
      HomeService,
      ServiceUtils,
      SessionService
    ]


  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PageHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the form', () => {
    const fixture = TestBed.createComponent(PageHomeComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    expect(component.formHome).toBeDefined();
  });

  // it('should load list of products on init', () => {
  //   homeServiceSpy.getProducts.and.returnValue(of(mockProducts));
  //   const fixture = TestBed.createComponent(PageHomeComponent);
  //   const component = fixture.componentInstance;

  //   component.ngOnInit();

  //   expect(homeServiceSpy.getProducts).toHaveBeenCalled();
  //   expect(component.dataList).toEqual(mockProducts);
  //   expect(component.filteredList).toEqual(mockProducts);
  // });

  // it('should navigate to create page with query params', () => {
  //   const fixture = TestBed.createComponent(PageHomeComponent);
  //   const component = fixture.componentInstance;
  //   const row = { id: 1, name: 'Product 1' };
  //   component.createRegistry(row);
  //   expect(routerSpy.navigate).toHaveBeenCalledWith(['/create'], {
  //     queryParams: row,
  //   });
  // });

  it('should navigate to other route on button click', () => {
    const fixture = TestBed.createComponent(PageHomeComponent);
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(navigateSpy).toHaveBeenCalledWith(['/create']);
  });
});