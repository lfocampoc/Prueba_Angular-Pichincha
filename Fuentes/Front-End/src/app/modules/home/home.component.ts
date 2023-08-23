import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import * as moment from 'moment';
import { HomeService } from '@services/home-services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.html',
})
export class PageHomeComponent implements OnInit {
  public formHome: FormGroup;
  public dataList: any;
  public filteredList: any;
  public moment = moment;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
    
    this.loadListInit();
  }

  public loadListInit() {
    this.homeService.getProducts().subscribe((response: any) => {
      console.log('Servicio', response)
      this.dataList = response;
      this.filteredList = this.dataList;
    });
  }

  public initForm() {
    this.formHome = this.formBuilder.group({
      search: [null, Validators.required]
    });
  }

  public createRegistry(row?: any) {

    this.router.navigate(
      ['/create'],
      { queryParams: row }
    );
  }

  public onFilter(event: any) {
    const filterValue = event.target ? (event.target as HTMLInputElement).value : event;
    this.filteredList = this.dataList.filter((x: any) => x.name.toLowerCase().includes(filterValue.toLowerCase()));
  }

  public deleteRow(id: string) {
    this.homeService.deleteProducts(id).subscribe((response: any) => {
      this.loadListInit();
    });
  }
}