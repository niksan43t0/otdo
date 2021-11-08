package otdo.services

import org.slf4j.LoggerFactory
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.stereotype.Component
import otdo.database.SqlLoader
import otdo.services.model.Service
import java.lang.invoke.MethodHandles

@Component
class ServicesRepository(val jdbcTemplate: NamedParameterJdbcTemplate) {
    private val logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass().canonicalName)

    fun getServices(): List<Service> {
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
        SqlLoader.GET_SERVICES
        TODO("Not yet implemented")
    }

    fun editService(service: Service) {
        logger.info("[editService] {}", service)
        TODO("Not yet implemented")
    }
}
