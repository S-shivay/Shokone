import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageemailnotification',
  templateUrl: './manageemailnotification.component.html',
  styleUrls: ['./manageemailnotification.component.css']
})
export class ManageemailnotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // move(sens:any) {
      
  //   var i, sourceSel, targetSel; 
    
  //   if (sens == 'right') {
  //     sourceSel = document.getElementById('selectBoxOne'); 
  //     targetSel = document.getElementById('selectBoxSecond');
  //   } else {
  //     sourceSel = document.getElementById('selectBoxSecond'); 
  //     targetSel = document.getElementById('selectBoxOne');
  //   }
       
  //   i = sourceSel.options.length;
  //   while (i--) {
  //     if (sourceSel.options[i].selected) {
  //       targetSel.appendChild(sourceSel.options[i]);
  //     }
  //   }
  //   }
}
