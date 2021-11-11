import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {Post, PostType} from "./model/Post";
import {PostsService} from "./posts.service";

@Injectable()
export class MainPageResolver implements Resolve<Post[]> {
  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postsService.getPosts(PostType.OVERVIEW);
  }
}
