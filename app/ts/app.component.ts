import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives : [PlaylistComponent]
})

export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Video>;

	constructor(){
		this.videos = [
			new Video(1, "abc", "iPsPGqWKY9U", "lol"),
			new Video(2, "xyz", "v7QsVe28xyE", "looool")
		]
	}
}
