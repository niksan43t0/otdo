package otdo.posts.model

data class Post(
    val id: Long? = null,
    val text: String,
    val textColor: String,
    val backgroundColor: String,
    val imgSrc: String,
)