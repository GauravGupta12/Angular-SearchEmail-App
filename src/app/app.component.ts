import { Component, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
	nameEmailList : any;
	nameEmailKeys: string[];
	@Input() inputText: string;
	emailResult: string = "Enter name in search box";
	error : string;
	
	constructor(private http: HttpClient){
		http.get('./assets/class-email-dictionary.json', { responseType: 'text' })
			.subscribe(data => {
				this.nameEmailList = JSON.parse(data);
				this.nameEmailKeys = Object.keys(this.nameEmailList);
			}
		);
	}
		
	searchEmail(inputText : HTMLInputElement) {
		//this.emailResult =  inputText;
	  let email = this.nameEmailList[inputText.value];
	  
	  if(email){
		  this.emailResult =  email;
	  }
	  else{
		  this.emailResult = "NO MATCH NAME. PLEASE TRY AGAIN";
	  }
  }
  
}
