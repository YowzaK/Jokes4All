import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly SUBMIT_JOKES: string = 'https://4.201.80.138:3000/jokes';
    public readonly DELIVER_JOKES: string = 'https://20.211.116.69:3001/jokes';
    public readonly MODERATE_JOKES: string = 'https://20.241.175.227:3002/moderator';
}