import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {Post, PostType} from "../generic-posts/model/Post";
import {PostsService} from "../generic-posts/posts.service";

@Injectable()
export class ServicesPageResolver implements Resolve<Post[]> {
  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postsService.getPosts(PostType.SERVICES);
  }
}
