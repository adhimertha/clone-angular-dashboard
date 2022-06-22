import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FindOptions, ResponseData } from "@igloohomeco/types";
import { Observable } from "rxjs";
import { Department } from "./interfaces";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  findDepartments(): any {
    return "sukses";
  }
}
