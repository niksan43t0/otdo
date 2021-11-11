package otdo.posts

import org.springframework.stereotype.Service
import otdo.posts.model.Post

@Service
class PostsService(private val servicesRepository: PostsRepository) {
    fun getPosts(): List<Post> {
        return servicesRepository.getPosts()
    }
}
