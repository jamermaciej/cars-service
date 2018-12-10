import { Car } from '../models/car';
import { CarsService } from './../cars.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

declare const M;

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit, AfterViewInit {

  car: Car;

  addCarForm: FormGroup;

  constructor(private carsService: CarsService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router ) { }

  ngOnInit() {
    this.getCar();

    // this.route.paramMap.subscribe( (param: Params) => {
    //   const id =  param.get('id');
    //   this.carsService.getCar(id).subscribe( car => {
    //     this.car = car;
    //   });
    // });
    this.addCarForm = this.formBuilder.group({
      model: [this.car.model, Validators.required],
      type: [this.car.type, Validators.required],
      plate: [this.car.plate, Validators.required],
      deliveryDate: [this.car.deadline, Validators.required],
      deadline: [this.car.deadline, Validators.required],
      power: [this.car.power, Validators.required],
      color: [this.car.color, Validators.required],
      cost: [this.car.cost, Validators.required],
      isFullyDamaged: [this.car.isFullyDamaged, Validators.required],
      clientFirstName: [this.car.clientFirstName, Validators.required],
      clientSurname: [this.car.clientSurname, Validators.required],
      year: [this.car.year, Validators.required]
    });


  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.datepicker');
    const options = {
      format: 'yyyy/mm/dd'
    };
    const instances = M.Datepicker.init(elems, options);
  }

  onSubmit() {
    this.updateCar();
  }

  getCar() {
    // const id = +this.route.snapshot.params['id'];
    // this.carsService.getCar(id).subscribe( car => {
    //   this.car = car;
    // });
    this.car = this.route.snapshot.data['car'];
  }
  updateCar() {
    this.carsService.updateCar(this.car._id.$oid, this.addCarForm.value).subscribe( () => {
      this.router.navigate(['/cars']);
    });
  }
  back() {
    this.router.navigate(['cars'], {
      queryParamsHandling: 'preserve'
    });
  }
  updateDate(event) {
    let name = event.target.id;
    name = name === 'delivery-date' ? 'deliveryDate' : name;
    this.addCarForm.patchValue({
      [name] : event.target.value
    });
  }
}
