import { Component, OnInit } from '@angular/core';


declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      var $box = $('#box')
      , slideInterval = 5000;

      $box.boxSlider({
          speed: 1000
      , autoScroll: true
      , timeout: slideInterval
      , next: '#next'
      , prev: '#prev'
      , pause: '#pause'
      , effect: 'blindDown'
      , blindCount: 15
      , responsive:true


      
      });
      
  })
  }

}
