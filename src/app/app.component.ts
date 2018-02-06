import { Component } from '@angular/core';
import { ConstantsService } from './constants.service';
import { VALUES_ENGLISH,VALUES_HINDI } from './constants.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedLanguage:string = "English";

  constructor(public constantsService:ConstantsService){
    constantsService.englishSelected = false;
  }

  toggleLanguage(){
    this.constantsService.englishSelected = !this.constantsService.englishSelected;
    this.constantsService.value = this.constantsService.englishSelected ? 
                                  this.constantsService.value = new VALUES_ENGLISH() :
                                  this.constantsService.value = new VALUES_HINDI()                                  
    this.selectedLanguage = this.constantsService.englishSelected ? 
                            this.constantsService.LANGUAGES.ENGLISH :
                            this.constantsService.LANGUAGES.HINDI
  }
}
