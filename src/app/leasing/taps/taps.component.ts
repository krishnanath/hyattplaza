import { Component} from '@angular/core';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
 
declare var jQuery: any;
 declare var $ : any;


@Component({
  selector: 'app-taps',
  templateUrl: './taps.component.html',
  styleUrls: ['./taps.component.scss']
})
export class TapsComponent implements OnInit {


  dropDown() {
    $(document).ready(function(){
 $('#ddlViewBy').change(function(){
  if($('#ddlViewBy').val()=="1"){
    $('#cont-us').show();
    $('#anj').hide();
    $('#precious').hide();
  }
     if($('#ddlViewBy').val()=="2"){
   $('#cont-us').hide();
  $('#anj').show();
  $('#precious').hide();


  }
  if($('#ddlViewBy').val()=="3"){
    $('#precious').show();
    $('#cont-us').hide();
    
    $('#anj').hide();
  }
 
 })  

     })

  }

  showMainContent: Boolean = true;

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
 }
  
 

   

  constructor() { }

  ngOnInit() {
 
    
this.dropDown();

//  NewDROPDown
 
// ENdDropDown






    $(document).ready(function(){
	
      // Variables
      var clickedTab = $(".tabs > .active");
      var tabWrapper = $(".tab__content");
      var activeTab = tabWrapper.find(".active");
      var activeTabHeight = activeTab.outerHeight();
      
      // Show tab on page load
      activeTab.hide();
      
      // Set height of wrapper on page load
      //tabWrapper.height(activeTabHeight);
      
      $(".tabs > li").on("click", function() {
        
        // Remove class from active tab
        $(".tabs > li").removeClass("active");
        
        // Add class active to clicked tab
        $(this).addClass("active");
        
        // Update clickedTab variable
        clickedTab = $(".tabs .active");
        
        // fade out active tab
        activeTab.fadeOut(250, function() {
          
          // Remove active class all tabs
          $(".tab__content > li").removeClass("active");
          
          // Get index of clicked tab
          var clickedTabIndex = clickedTab.index();
    
          // Add class active to corresponding tab
          $(".tab__content > li").eq(clickedTabIndex).addClass("active");
          
          // update new active tab
          activeTab = $(".tab__content > .active");
          
          // Update variable
          activeTabHeight = activeTab.outerHeight();
          
          // Animate height of wrapper to new tab height
          tabWrapper.stop().delay(50).animate({
            height: activeTabHeight
          }, 500, function() {
            
            // Fade in active tab
            activeTab.delay(50).fadeIn(250);
            
          });
        });
      });
      
        

    });




  }

}
