import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../company";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[]=[];
  constructor(private companyService: CompanyService, private router: Router){
  }
  ngOnInit():void{
    this.getCompanies();
  }
  getCompanies(){
    this.companyService.getCompanies().subscribe(data=>{
      this.companies = data;
    });
  }
  toVacancies(link:number){
    this.router.navigate(['companies/',link])
  }
}
