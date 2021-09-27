import { Injectable } from "@angular/core";
import { Data } from "../_interfaces/data";

@Injectable()
export class Database {

  private fileBridge: any;
  private data: Data;
  private isMockData:boolean;

  constructor() {
    const electron = (window as any).electron ?? {}
    this.fileBridge = electron.data;
    this.data = this.fileBridge ? JSON.parse(this.fileBridge.read()) : this.getMockData();
  }

  public isFirstTime():boolean{
    return this.data.preferences.firstTime;
  }

  public setFirstTime() {
    this.data.preferences.firstTime = false;
  }

  public setUser(name:string, password:string) {
    this.data.user.name = name;
    // TODO: implements password encrypting
    this.data.user.passwordHash = password;
  }

  public async saveData() {
    try {
      this.isMockData ? await this.fileBridge.write(JSON.stringify(this.data)) : true
    } catch (error) {
      throw new Error("Error");
    }
  }

  private getMockData() {
    this.isMockData = true;
    return {
      user: {
        name: "",
        passwordHash: ""
      },
      preferences: {
        firstTime: true,
        lang: 0
      },
      passwords: []
    }
  }
}
