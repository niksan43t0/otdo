package otdo.posts

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import otdo.posts.model.Post
import otdo.posts.model.PostType

@RestController
@RequestMapping("/posts")
class PostsController(private val postsService: PostsService) {

    @GetMapping("/{postType}")
    fun getPosts(@PathVariable("postType") postType: PostType): List<Post> {
        return postsService.getPosts(postType)
    }
}