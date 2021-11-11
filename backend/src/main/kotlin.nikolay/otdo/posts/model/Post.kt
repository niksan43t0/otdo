package otdo.posts.model

data class Post(
    val id: Long? = null,
    val heading: String,
    val text: String,
    val textColor: String,
    val backgroundColor: String,
    val imgSrc: String,
    val postType: PostType,
)

enum class PostType {
    PICTURE_LEFT, PICTURE_RIGHT, PICTURE_BOTTOM
}