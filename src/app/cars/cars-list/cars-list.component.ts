import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from './../cars.service';
import { TotalCostComponent } from './../total-cost/total-cost.component';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit, AfterViewInit {

  showSpinner = true;

  @ViewChild('totalCostRef')
  totalCostRef: TotalCostComponent;

  totalCost: number;
  grossCost: number;

  cars: Car[];

  addCarForm: FormGroup;

  searchBy = 'model';

  filteredCars: Car[];
  private _filterText: string;

  get filterText(): string {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredCars = this.filterCars(value);
    this.countTotalCost();
  }

  filterCars(filterText: string) {
    return this.cars.filter( car => car[this.searchBy].toLowerCase().indexOf(filterText.toLowerCase()) !== -1 );
  }

  // filterText: string;

  // message = new ReactiveMessage();

  // cars: Car[] = [
  //   {
  //     id: 1,
  //     model: 'Mazda Rx7',
  //     plate: 'GD2121E',
  //     deliveryDate: '21-04-2017',
  //     deadline: '05-05-2016',
  //     client: {
  //       firstName: 'Jan',
  //       surname: 'Kowalski'
  //     },
  //     cost: 300,
  //     isFullyDamaged: true
  //   },
  //   {
  //     id: 2,
  //     model: 'Mercedes 124',
  //     plate: 'KRK2200',
  //     deliveryDate: '24-05-2017',
  //     deadline: '03-06-2016',
  //     client: {
  //       firstName: 'Micha�',
  //       surname: 'Nowak'
  //     },
  //     cost: 1200,
  //     isFullyDamaged: true
  //   },
  //   {
  //     id: 3,
  //     model: 'Renault CLIO',
  //     plate: 'GWE22011',
  //     deliveryDate: '02-02-2017',
  //     deadline: '03-03-2017',
  //     client: {
  //       firstName: 'Beata',
  //       surname: 'Dampc'
  //     },
  //     cost: 2800,
  //     isFullyDamaged: true
  //   }
  // ];
  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
                this.cars = this.route.snapshot.data['cars'];
                this.filteredCars = this.route.snapshot.data['cars'];
                this.countTotalCost();
                this.showSpinner = false;
              }

  ngOnInit() {
    // this.gerCars();

    // this.addCarForm = new FormGroup({
    //   model: new FormControl(null, Validators.required),
    //   type: new FormControl(null, Validators.required),
    //   plate: new FormControl(null, Validators.required),
    //   deliveryDate: new FormControl(null, Validators.required),
    //   deadline: new FormControl(null, Validators.required),
    //   power: new FormControl(null, Validators.required),
    //   color: new FormControl(null, Validators.required),
    //   cost: new FormControl(null, Validators.required),
    //   isFullyDamaged: new FormControl(true, Validators.required),
    //   clientFirstName: new FormControl(null, Validators.required),
    //   clientSurname: new FormControl(null, Validators.required)
    // });

    this.addCarForm = this.formBuilder.group({
      model: ['', Validators.required],
      type: ['', Validators.required],
      plate: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      deadline: ['', Validators.required],
      power: ['', Validators.required],
      color: ['', Validators.required],
      cost: ['', Validators.required],
      isFullyDamaged: [true, Validators.required],
      clientFirstName: ['', Validators.required],
      clientSurname: ['', Validators.required],
      year: ['', Validators.required],
    });

    // this.carsService.getCars().subscribe( () => {
    //   this.showSpinner = false;
    // });
  }

  onSubmit() {
    // console.log(this.addCarForm);

    // this.message.model = this.addCarForm.value.model;
    // this.message.type = this.addCarForm.value.type;
    // this.message.plate = this.addCarForm.value.plate;
    // this.message.deliveryDate = this.addCarForm.value.deliveryDate;
    // this.message.deadline = this.addCarForm.value.deadline;
    // this.message.power = this.addCarForm.value.power;
    // this.message.color = this.addCarForm.value.color;
    // this.message.cost = this.addCarForm.value.cost;
    // this.message.isFullyDamaged = this.addCarForm.value.isFullyDamaged;
    // this.message.clientFirstName = this.addCarForm.value.clientFirstName;
    // this.message.clientSurname = this.addCarForm.get('clientSurname').value;
    // console.log(this.message);

    this.addCar();
  }

  changeName() {
    this.cars[0].model = 'Żuk';
    this.filteredCars = this.filterCars(this.filterText);
  }

  ngAfterViewInit() {
    this.totalCostRef.showGross();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    // this.totalCost = this.cars
    this.totalCost = this.filteredCars
    .map( car => car.cost )
    .reduce( (prev, next) => prev + next );
  }
  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

  gerCars(): void {
    // przeniesione do constructura ---> Resolve
    // wykorzystywane tylko przy pobieraniu listy po usunięciu samochodu
    this.carsService.getCars().subscribe( cars => {
      this.cars = cars;
      this.filteredCars = cars;
      this.countTotalCost();
      this.showSpinner = false;
    });
  }
  addCar(): void {
    this.carsService.addCar(this.addCarForm.value).subscribe( () => {
      this.gerCars();
      this.addCarForm.reset();
    });
  }
  deleteCar(id, event): void {
    event.stopPropagation();
    this.carsService.deleteCar(id.$oid).subscribe( () => {
      this.gerCars();
    });
  }
  showDetails(car: Car) {
    // this.router.navigate(['/cars', car.id], {
    //   queryParams: { 'filter': this.filterText }
    // });
    this.router.navigate(['/cars', car._id.$oid], {
      queryParams: { 'filter': this.filterText }
    });

  }

  filter(event) {
    this.filterText = event;
  }

  filterBy(event) {
    this.searchBy = event;
    // this.filterText = ''; // kasowanie tekstu w componencie
    if ( this.filterText ) {
      this.filteredCars = this.filterCars(this.filterText);
    }
  }

  sort() {
    console.log('sort');
  }
}
// class ReactiveMessage {
//   constructor(
//     public model: string,
//     public type: string,
//     public plate: string,
//     public deliveryDate: string,
//     public deadline: string,
//     public power: number,
//     public color: string,
//     public cost: number,
//     public isFullyDamaged: boolean,
//     public clientFirstName: string,
//     public clientSurname: string
//   ) { }
// }
