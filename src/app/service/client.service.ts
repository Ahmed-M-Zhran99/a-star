import { Injectable } from '@angular/core';
import { Client } from '../modals/client.modal';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  client?: Client;

  constructor() {}
}
