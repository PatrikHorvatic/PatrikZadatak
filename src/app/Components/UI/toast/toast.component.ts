import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Environment } from 'src/app/Environment/environment';

/**Komponenta služi za prikaz obavijesti na vrhu prozora nakon neke radnje */
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnChanges {

  @HostBinding('style.visibility') visibility: string = 'hidden';

  /**Zastavica za prikaz modala */
  @Input() show: boolean = true;
  /**Zastavica za prikaz modala */
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**Poruka koja će se prikazati u tostu */
  @Input() message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if (changes["show"]) {
      
      if (changes["show"].currentValue === false) {
      }
      else {
        this.visibility = "visible";
        setTimeout(() => {
          this.visibility = "hidden";
          this.show = false;
          this.showChange.emit(false);
        }, Environment.toast.duration);
      }
    }



  }
}
