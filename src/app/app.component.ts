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

  openDirection() {
    window.open("https://www.google.com/maps/place/Mannat+Farm+House/@29.1907981,78.5897115,19.23z/data=!4m13!1m7!3m6!1s0x390bb38a5e863669:0xf1bc2f2867d644ee!2sSeohara,+Uttar+Pradesh+246746!3b1!8m2!3d29.2012596!4d78.5944718!3m4!1s0x390bb39339981b29:0x304ad2da49829c7c!8m2!3d29.1910813!4d78.5896401");
  }
}
