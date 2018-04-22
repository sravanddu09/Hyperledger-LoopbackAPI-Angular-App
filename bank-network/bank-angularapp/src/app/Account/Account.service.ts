import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Account } from '../org.decentralized.bank.network';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class AccountService {

	
		private NAMESPACE: string = 'org.decentralized.bank.network.Account';
	



    constructor(private dataService: DataService<Account>) {
    };

    public getAll(): Observable<Account[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Account> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Account> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Account> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Account> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
