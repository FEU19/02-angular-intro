import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'heffaklump',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Angular demo';
	flavor: string = 'chocolate';
	optimumAmount: number = 3;

	makeItStrawberry(): void {
		console.log('makeItStrawberry');
		this.flavor = 'strawberry';
	}
	restoreChocolate(): void {
		this.flavor = 'chocolate';
	}

	// use OnInit to do things when the component is first created
	ngOnInit(): void {
		console.log('ngOnInit: AppComponent was created');
		// this.flavor = 'strawberry';
	}
}






//
