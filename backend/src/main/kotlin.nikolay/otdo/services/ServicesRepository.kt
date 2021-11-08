package otdo.services

import org.slf4j.LoggerFactory
import org.springframework.stereotype.Repository
import otdo.services.model.Service
import java.lang.invoke.MethodHandles
import java.math.BigDecimal

@Repository
class ServicesRepository {
    private val logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass().canonicalName)

    fun getServices(): List<Service> {
        return listOf(Service(1, "Подгъв", BigDecimal.TEN, BigDecimal.TEN))
    }

    fun createNewService(service: Service): Long {
        logger.info("[createNewService] {}", service)
        TODO("Not yet implemented")
    }

    fun editService(service: Service) {
        logger.info("[editService] {}", service)
        TODO("Not yet implemented")
    }
}
