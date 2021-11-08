package otdo.services

import org.slf4j.LoggerFactory
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.stereotype.Component
import otdo.database.SqlLoader
import otdo.database.queryInPlace
import otdo.services.model.Service
import java.lang.invoke.MethodHandles

@Component //TODO when replace with @Repository and open, can't find jdbcTemplate then
class ServicesRepository(val jdbcTemplate: NamedParameterJdbcTemplate) {
    private val logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass().canonicalName)

    fun getServices(): List<Service> {
        logger.info("[getServices]")
        return jdbcTemplate.query(SqlLoader.GET_SERVICES) { rs, _ ->
            Service(
                rs.getLong("id"),
                rs.getString("name"),
                rs.getBigDecimal("from_amount"),
                rs.getBigDecimal("to_amount")
            )
        }
    }

    fun createNewService(service: Service): Long {
        logger.info("[createNewService] {}", service)
        val params = MapSqlParameterSource()
            .addValue("name", service.name)
            .addValue("fromAmount", service.fromAmount)
            .addValue("toAmount", service.toAmount)
        return jdbcTemplate.queryInPlace(SqlLoader.INSERT_SERVICE, params) { rs ->
            rs.next()
            rs.getLong("id")
        }!!
    }

    fun editService(service: Service) {
        logger.info("[editService] {}", service)
        val params = MapSqlParameterSource()
            .addValue("id", service.id)
            .addValue("name", service.name)
            .addValue("fromAmount", service.fromAmount)
            .addValue("toAmount", service.toAmount)
        jdbcTemplate.update(SqlLoader.UPDATE_SERVICE, params)
    }
}
