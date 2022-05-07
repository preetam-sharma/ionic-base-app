/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public typeName: string = 'user';

  public id: string = '';

  public userType: string = '';

  public userName: string = '';

  public fullName: string = '';

  public token: string = '';

  public companyId: string = '';

  public companyCode: string = '';

  public onboardingStatus: boolean = false;

  public accessList: any = [];

  constructor(
    private storage: StorageService
  ) {

    this.sync();

    this.autoSync();

   }

  public save() {

    const instance = {

      id: this.id,
      userType: this.userType,
      userName: this.userName,
      fullName: this.fullName,
      token: this.token,
      companyId: this.companyId,
      companyCode: this.companyCode,
      onboardingStatus: this.onboardingStatus,
      accessList: this.accessList

    };

    this.storage.set(
      this.typeName,
      JSON.stringify(instance)
    );

    return this.storage.get(
      this.typeName
    );

  }

  async sync() {

    const storageInstance = this.storage.get(
      this.typeName
    );

    if (!storageInstance) {
      this.id = '';
      this.userType = '';
      this.userName = '';
      this.fullName = '';
      this.token = '';
      this.companyId = '';
      this.companyCode = '';
      this.onboardingStatus = false;
      this.accessList = [];
      return false;
    }

    const _parsed = JSON.parse(storageInstance);

    this.id = _parsed.id;
    this.userType = _parsed.userType;
    this.userName = _parsed.userName;
    this.fullName = _parsed.fullName;
    this.token = _parsed.token;
    this.companyId = _parsed.companyId;
    this.companyCode = _parsed.companyCode;
    this.onboardingStatus = _parsed.onboardingStatus;
    this.accessList = _parsed.accessList;

    return true;

  }

  public clean() {

    this.id = '';
    this.userType = '';
    this.userName = '';
    this.fullName = '';
    this.token = '';
    this.companyId = '';
    this.companyCode = '';
    this.onboardingStatus = false;
    this.accessList = [];

    return this.storage.remove(
      this.typeName
    );

  }

  private autoSync() {

    window.addEventListener('storage', (event: any) => {
      this.sync();
      window.location.reload();
    });

  }


}
