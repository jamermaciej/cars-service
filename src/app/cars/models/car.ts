// import { Client } from './client';

export interface Car {
    _id?: {$oid: string};
    model: string;
    type: string;
    plate: string;
    deliveryDate: string;
    deadline: string;
    color: string;
    power: number;
    clientFirstName: string;
    clientSurname: string;
    cost: number;
    isFullyDamaged: boolean;
    year: string;
    parts: Object[]
}
