import { CsValidators } from './../shared-module/validators/cs-validators';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from './../cars.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
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
      power: ['', CsValidators.power],
      color: [''],
      // cost: [''],
      isFullyDamaged: [false, Validators.required],
      clientFirstName: ['', Validators.required],
      clientSurname: ['', Validators.required],
      year: [''],
      parts: this.formBuilder.array([])
    });
  }

  buildParts(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      inStock: [true, Validators.required],
      price: ['', Validators.required]
    });
  }

  get parts(): FormArray {
    return <FormArray>this.addCarForm.get('parts');
  }

  addPart(event): void {
    event.preventDefault();
    this.parts.push(this.buildParts());
  }

  removePart(i): void {
    this.parts.removeAt(i);
  }

  getPartsCost(parts) {
    return parts.reduce( (prev, next) => {
      return prev + next.price;
    }, 0);
  }

  togglePlateValidity() {
    const damageControl = this.addCarForm.get('isFullyDamaged');
    const plateControl = this.addCarForm.get('plate');

    if ( damageControl.value ) {
      plateControl.clearValidators();
    } else {
      plateControl.setValidators(Validators.required);
    }

    plateControl.updateValueAndValidity();
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
    // zastąpione FormArray
    // const carFormData = Object.assign({}, this.addCarForm.value);
    // carFormData.parts = [carFormData.parts];
    const carFormData = Object.assign({}, this.addCarForm.value);
    carFormData.cost = this.getPartsCost(carFormData.parts);

    this.carsService.addCar(carFormData).subscribe( () => {
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
