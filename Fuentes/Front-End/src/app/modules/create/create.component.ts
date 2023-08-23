import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { CreateService } from "@services/create-services";
import { HomeService } from "@services/home-services";
import * as moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './create.html',
})
export class PageCreateComponent implements OnInit {
  public formRegister: FormGroup;
  public errorService: boolean;
  public rowExist: boolean;
  public saveService: boolean;
  public invalidDate: boolean;
  public params: any = {};
  public regex_format = /^\d{4}-\d{2}-\d{2}$/;

  constructor(
    private activatedRoute: ActivatedRoute,
    private createService: CreateService,
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.params = params;
        this.initForm(params);
      }
    );
    this.initForm();
  }

  public initForm(row?: any) {
    this.formRegister = this.formBuilder.group({
      id: [{ value: row?.id ? row.id : '', disabled: row.id ? true : false},
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10)
          ])],
      name: [{ value: row.name ? row.name : '', disabled: false},
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(100)
          ])],
      description: [{ value: row.description ? row.description : '', disabled: false},
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(200)
          ])],
      logo: [{ value: row.logo ? row.logo : '', disabled: false}, Validators.required],
      date_release: [{ value: row.date_release ? moment(row.date_release).format('YYYY-MM-DD') : null, disabled: false},
        Validators.compose(
          [
            Validators.required,
            Validators.pattern(this.regex_format)            
          ])],
      date_revision: [{ value: row.date_revision ? moment(row.date_revision).format('YYYY-MM-DD') : null, disabled: true}]
    });

    // subscribir a cambios en valor
    this.formRegister.get("date_release").valueChanges.subscribe(value => {
      
      if (!this.formRegister.get("date_release").errors) {

        if (value < moment('YYYY-MM-DD').format) {
          this.invalidDate = true;
        } else {
          this.invalidDate = false;
          this.formRegister.get('date_revision').setValue(moment(value).add(1, 'y').format('YYYY-MM-DD')); 
        }

        
      }
   })
  }

  public createRow() {
    const formData = this.formRegister.getRawValue();
    this.createService.checkProduct(formData.id).subscribe((value: boolean) => {
      this.rowExist = value;

      if (!this.rowExist) {
        this.createService.createProducts(formData).subscribe((response: any) => {
  
        });
      }
    });
  }

  public updateRow() {
    this.errorService = false;
    const formData = this.formRegister.getRawValue();
    this.createService.putProducts(formData).subscribe(response => {
      this.saveService = true;
      // setTimeout(() => {
      //   this.saveService = false;
      // }, 1000);
    }, error => {
      this.errorService = true;
    });
  }

  public resetForm() {
    this.formRegister.reset();
  }

  public validateControls(control: string, minLength: number, maxLength: number) {
    const value = this.formRegister.get(control).value;

    if (value) {
      if (value.length >= minLength && value.length <= maxLength) {
        return true;
      }
    }

    return false;
  }
}