import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {EventService} from '../shared/services/EventService';
import {WishService} from './wish/wish.service';
import {ContactComponent} from './contact/contact.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports:[FormsModule, CommonModule, ContactComponent],
    providers: [EventService, WishService],
    standalone:true
})
export class AppComponent {

  constructor(){}

  ngOnInit(): void {


  }


}
