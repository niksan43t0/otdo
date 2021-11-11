import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./model/Post";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly domain: string;

  constructor(private http: HttpClient) {
    this.domain = environment._SERVER + '/posts';
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.domain);
  }
}
