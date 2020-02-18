import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-learning',
	templateUrl: './learning.component.html',
	styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
	name: string;
	darkMode: boolean = true;

	nameChange(event): void {
		this.name = event.target.value;
	}
	toggleDarkMode(): void {
		this.darkMode = !this.darkMode;
	}

	constructor() { }

	ngOnInit(): void {
		console.log('LearningComponent initialized');
	}

}
