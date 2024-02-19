import { Component } from '@angular/core';
import { SearchAllRootObject } from 'src/app/interfaces/searchAllInterface';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css']
})
export class SearchAllComponent {

  searchDataResult!: SearchAllRootObject;

  constructor(private generalService: GeneralService){}

  ngOnInit(){
    this.generalService.getSearchAllJsonData().subscribe((data)=> {
      this.searchDataResult = data;
    })
  }
}
