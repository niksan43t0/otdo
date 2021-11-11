package otdo.posts.model

data class Post(
    val id: Long? = null,
    val heading: String,
    val text: String,
    val textColor: String,
    val backgroundColor: String,
    val imgSrc: String,
    val postStyle: PostStyle,
    val postType: PostType,
)

enum class PostStyle {
    PICTURE_LEFT, PICTURE_RIGHT, PICTURE_BOTTOM
}

enum class PostType {
    OVERVIEW, MACHINES, SERVICES, GALLERY
}