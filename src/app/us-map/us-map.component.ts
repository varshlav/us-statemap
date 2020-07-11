// @ts-ignore
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsMapService } from './us-map.service';

@Component({
  selector: 'us-map',
  templateUrl: './us-map.component.html',
  styleUrls: ['./us-map.component.css']
})
export class UsMapComponent implements OnInit {
	coordinates: object;
	@Input() fillColor: string = "#FFFFFF";
	@Input() fillStateColor: string = "#CCCCCC";

  lowStateColor: string = "#85C1E9";
  midStateColor: string = "#2E86C1";
  highStateColor: string = "#1B4F72";

  @Input() lowStateArr: string[];
  @Input() midStateArr: string[];
  @Input() highStateArr: string[];

	@Input() strokeColor: string = "#000000";


  	@Output('onMapClick') click = new EventEmitter();

  	constructor(private usMapService: UsMapService) { }

  	ngOnInit() {
    	this.usMapService.getUsMapCoordinates().then(data => this.coordinates = data);
  	}

  	onUsMapClick(state){
		  this.click.emit({'state-abbr': state});
		  console.log('The state clicked is ' + state);
  	}
}
