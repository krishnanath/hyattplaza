import { Component,OnInit} from '@angular/core';
// import {OnInit} from ''
declare var jQuery: any;
 declare var $ : any;

@Component({
  selector: 'app-buy-online',
  templateUrl: './buy-online.component.html',
  styleUrls: ['./buy-online.component.scss']
})
export class BuyOnlineComponent implements OnInit {

   radioHide() {

    $(document).ready(function(){
      
        $('.form-check-input').change(function(){
          $('#add-hide').toggle();
        })


      
    })

   }

  constructor() { }

  ngOnInit() {
    $('#add-hide').hide();

    this.radioHide();



    $(document).ready(function(){
 
      $("#qar200").keyup(function(){
 
        $("#total_amount").val(($("#qar200").val() * 200) + ($("#qar100").val() * 100) + ($("#qar50").val() * 50)+ " QAR");
 
      });
      $("#qar100").keyup(function(){
       //this.computeData();
    $("#total_amount").val(($("#qar200").val() * 200) + ($("#qar100").val() * 100) + ($("#qar50").val() * 50)+ " QAR");
     
      });
      $("#qar50").keyup(function(){
 $("#total_amount").val(($("#qar200").val() * 200) + ($("#qar100").val() * 100) + ($("#qar50").val() * 50) + " QAR");
        
        // this.computeData();
      });
  
    });
  
    
  }

   


}
