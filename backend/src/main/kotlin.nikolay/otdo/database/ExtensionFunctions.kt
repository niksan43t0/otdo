package otdo.database

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.jdbc.core.namedparam.SqlParameterSource
import java.sql.ResultSet

/**Allows for [rse] to be defined in place.*/
fun <T> NamedParameterJdbcTemplate.queryInPlace(sql: String, paramSource: SqlParameterSource, rse: (ResultSet) -> T): T? {
    return this.query(sql, paramSource, rse)
}