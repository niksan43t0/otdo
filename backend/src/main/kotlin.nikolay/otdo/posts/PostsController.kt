package otdo.posts

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import otdo.posts.model.Post

@RestController
@RequestMapping("/posts")
class PostsController(private val postsService: PostsService) {

    @GetMapping
    fun getPosts(): List<Post> {
        return postsService.getPosts()
    }
}