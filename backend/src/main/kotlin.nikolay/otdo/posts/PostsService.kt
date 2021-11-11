package otdo.posts

import org.springframework.stereotype.Service
import otdo.posts.model.Post
import otdo.posts.model.PostType

@Service
class PostsService(private val servicesRepository: PostsRepository) {
    fun getPosts(postType: PostType): List<Post> {
        return servicesRepository.getPosts(postType)
    }
}
