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
	echo: string = '';
	echo2: string = 'Change me!';

	makeItStrawberry(): void {
		console.log('makeItStrawberry');
		this.flavor = 'strawberry';
	}
	restoreChocolate(): void {
		this.flavor = 'chocolate';
	}
	reverseEcho(): void {
		this.echo2 = this.echo2.split('').reverse().join("");
	}

	onKeyUp(event): void {
		console.log('key up event: ', event);
		let input = event.target;
		let value = input.value;
		this.echo = value;
	}

	// use OnInit to do things when the component is first created
	ngOnInit(): void {
		console.log('ngOnInit: AppComponent was created');
		// this.flavor = 'strawberry';
	}
}






//
