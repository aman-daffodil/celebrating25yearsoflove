import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  public englishSelected:boolean = false;
  public value = new VALUES_ENGLISH();

  constructor() { }

  LANGUAGES = {
    ENGLISH: "English",
    HINDI: "Hindi"
  }
}

export class VALUES_ENGLISH {
  public FIRST_NAME = "Kapil";
  public SECOND_NAME = "Preeti";
  public CELEBRATING_25_YEARS_OF_LOVE = "Celebrating 25 years of love"; 
  public INVITE_MESSAGE = "As you have shared in their lives by your friendship and love we invite you to join in celebration of the 25th wedding anniversary of our parents Mr. Kapil Gupta and Mrs. Preeti Gupta on friday, 23rd February 2018 at 7'o clock in evening"
  public VENUE_TITLE = "Venue";
  public VENUE = "The ceremony will take place at the Mannat Farm House Near H.P. petrol pump Moradabad road Seohara, Distt. Bijnor"
  public FOOTER_MESSAGE = "WE HOPE TO SEE YOU ON 23RD FEBRUARY!";
}

export class VALUES_HINDI {
  public FIRST_NAME = "कपिल";
  public SECOND_NAME = "प्रीति"; 
  public CELEBRATING_25_YEARS_OF_LOVE = "प्यार के 25 साल";
  public INVITE_MESSAGE = "बहुत खुशी के साथ हम आपको 23 फरवरी 2018 को हमारी 25 वीं की शादी की सालगिरह का जश्न मनाने के लिए आमंत्रित करते हैं।"
  public VENUE_TITLE = "स्थान";
  public VENUE = "समारोह सोहारा, जिला बिजनौर में मन्नत भोज में होगा।"
  public FOOTER_MESSAGE = "हमें आपको 23 फरवरी को देखने की उम्मीद करते है!";
}
