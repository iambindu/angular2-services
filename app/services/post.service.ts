import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/operator/map';



interface post{
	_id:number,
	title:string,
	body:string
}

@Injectable()
 





export class PostService{
	private posts:any[];
	private apiUrl:string;
    private postData:any;

	constructor(private _http:Http){
		this.apiUrl="https://jsonplaceholder.typicode.com/posts"



		/*this.posts=[
		{
			title:'Hello Hyderabad',
			body:'Gud morning all'
		},
		{
			title:'Latest Updates',
			body:'Why do you need latest updates?just go home!!!'
		},
		{
			title:'who is Johngalt?',
			body:'Jhongalt is a man of highest virtue!!!'
		},
		{
			title:'I am Home',
			body:'I am done for the day and going home'
		}
		]
*/
	}
getPosts():Observable<post[]>{
					return this._http
					 .get(this.apiUrl).map(function(response){
					 	return response.json()
					 });
		
	// return this.posts;
}

}