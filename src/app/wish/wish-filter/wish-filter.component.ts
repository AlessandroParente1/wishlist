import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';


const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
  imports: [FormsModule],
  standalone:true
})
export class WishFilterComponent implements OnInit {

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.updateFilter('0');
  }

  listFilter : any = '0';

  updateFilter(value : any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
