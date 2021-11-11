package otdo.posts

import org.slf4j.LoggerFactory
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.stereotype.Component
import otdo.database.SqlLoader
import otdo.posts.model.Post
import otdo.posts.model.PostStyle
import otdo.posts.model.PostType
import java.lang.invoke.MethodHandles

@Component //TODO when replace with @Repository and open, can't find jdbcTemplate then
class PostsRepository(val jdbcTemplate: NamedParameterJdbcTemplate) {
    private val logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass().canonicalName)

    fun getPosts(postType: PostType): List<Post> {
        logger.info("[getPosts]")
        return jdbcTemplate.query(SqlLoader.GET_POSTS, MapSqlParameterSource("postType", postType.name)) { rs, _ ->
            Post(
                rs.getLong("id"),
                rs.getString("heading"),
                rs.getString("text"),
                rs.getString("text_color"),
                rs.getString("background_color"),
                rs.getString("img_src"),
                PostStyle.valueOf(rs.getString("post_style")),
                PostType.valueOf(rs.getString("post_type")),
            )
        }
    }
}
