import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchAllRootObject } from 'src/app/interfaces/searchAllInterface';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css']
})
export class SearchAllComponent {

  searchDataResult!: SearchAllRootObject;
  stringQuery!: string;
  query!: string;
  pageSelected!: number;
  lastPage!: number;
  showContent: boolean = false;

  constructor(private generalService: GeneralService, private router:Router){}

  ngOnInit(){
    //test
    
  }

  onClickSearch(){
    this.stringQuery = '&query='+this.query+'&number='+20
    // original query string
    // this.generalService.getSearchAll(this.stringQuery).subscribe((data)=> {
    //   this.searchDataResult = data;
    //   this.pageSelected = 1
    //   this.lastPage = Math.ceil(this.searchDataResult.totalResults  / 10);
    // })

    //test
    this.generalService.getSearchAllJsonData().subscribe((data)=> {
      this.searchDataResult = data;
      this.pageSelected = 1
      this.showContent = true;
      this.lastPage = Math.ceil(this.searchDataResult.totalResults  / 10);
    })
  }

  onClickDetails(recipeId: number){
    this.router.navigate(['/recipe-details'], { queryParams: { recipeId: recipeId }});
    // this.generalService.setResult_Details(result);
  }

  receiveMessageFromChild(page: number) {
    this.pageSelected = page;
    const skip: number = page * 20 - 20
    const newStringQuery = this.stringQuery + '&offset='+skip

    console.log(newStringQuery);
    // this.persistenceService.setInitialNumberPage(this.pageSelected);
    // this.isLoading = true
    // this.generalService.obtenerDatos(page).subscribe((data) => {
    //   this.plantList = data;
    //   this.isLoading = false;a
    //   this.persistenceService.setInitialPage(this.plantList);
    // });
    this.generalService.getSearchAll(newStringQuery).subscribe((data)=> {
      this.searchDataResult = data;
    })
  }
}
