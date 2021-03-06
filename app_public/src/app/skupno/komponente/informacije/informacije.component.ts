import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacije',
  templateUrl: './informacije.component.html',
  styleUrls: ['./informacije.component.css']
})
export class InformacijeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public vsebinaStrani = {
    glava: {
      naslov: "Informacije o aplikaciji",
      podnaslov: ""
    },
    vsebina: "EduGeoCache se uporablja za iskanje zanimivih lokacij v bližini, kjer lahko odpravite dolgčas.\n\nLorem ipsum dolor sit amet, his id latine impetus, vix ad purto constituto. Reque voluptatum eloquentiam usu eu. Suas scripta complectitur ius in. Pri ut alia assentior, ne putent vocent disputando vim, duo aeterno fierent ut. Vix ex enim habeo tacimates. Te diceret salutandi dignissim per, his ei nemore invenire. Ne ius omittam dissentiet.\n\nMea ad oblique facilis, fastidii albucius indoctum et cum. At nam docendi indoctum efficiantur. Minim inciderint in sea, per unum nonumes molestiae eu. Vim legere constituam ne, eum ut facilisis principes. Dolores voluptatum mel id, veniam minimum expetenda eum in. Ad eos autem singulis, laudem similique cum te."
  }

}
