import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from './../cars.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';

declare const M;

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit, AfterViewInit {

  addCarForm: FormGroup;

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.addCarForm = this.formBuilder.group({
      model: ['', Validators.required],
      type: [''],
      plate: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      deadline: [''],
      power: [''],
      color: [''],
      cost: [''],
      isFullyDamaged: [false, Validators.required],
      clientFirstName: ['', Validators.required],
      clientSurname: ['', Validators.required],
      year: [''],
    });
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.datepicker');
    const options = {
      format: 'dd.mm.yyyy',
      onClose: function() {
      }
    };
    const instances = M.Datepicker.init(elems, options);
  }

  onSubmit() {
    this.addCar();
  }
  addCar(): void {
    this.carsService.addCar(this.addCarForm.value).subscribe( () => {
      this.addCarForm.reset();
      this.router.navigate(['/cars']);
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
