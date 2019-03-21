import { Component } from '@angular/core';

 import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';

 import {flagStrap} from 'jquery-flagstrap';

 declare var jQuery: any;
 declare var $ : any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  enquiry = [
    {
      name:'OMAR SABAHIE',
      pos:'Marketing Executive',
      Tel: '44999657',
      mail: 'omar@hyattplaza.com'
    }
  ]


  constructor() { }

flagStrap(){
  $(document).ready(function(){
  //  $('.flagstrap').flagStrap.set('../../node_modules/jquery-flagstrap/dist/css/flagstrap.min.css');
    // $('.flagstrap').flagStrap();

    $('.flagstrap').flagStrap.set('/node_modules/jquery-flagstrap/dist/css/flagstrap.min.css');
    $('.flagstrap').flagStrap();
   


  })


}

  ngOnInit() {

    $(document).ready(function(){
  $('.flagstrap').flagStrap.set('../../node_modules/jquery-flagstrap/dist/css/flagstrap.min.css');

    $('.flagstrap').flagStrap();

    })
    this.flagStrap();


  }

}
