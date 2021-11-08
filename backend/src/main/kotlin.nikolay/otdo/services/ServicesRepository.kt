package otdo.services

import org.springframework.stereotype.Repository
import otdo.services.model.Service
import java.math.BigDecimal

@Repository
class ServicesRepository {
    fun getServices(): List<Service> {
        return listOf(Service(1, "Подгъв", BigDecimal.TEN, BigDecimal.TEN))
    }

    fun createNewService(service: Service): Long {
        TODO("Not yet implemented")
    }

    fun editService(service: Service) {
        TODO("Not yet implemented")
    }
}
