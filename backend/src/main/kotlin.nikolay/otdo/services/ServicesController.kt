package otdo.services

import org.springframework.web.bind.annotation.*
import otdo.services.model.Service
import java.math.BigDecimal

@RestController
@RequestMapping("/services")
class ServicesController {

    @GetMapping
    fun getServices(): List<Service> {
        return listOf(Service(1, "Подгъв", BigDecimal.TEN, BigDecimal.TEN))
    }

    @PostMapping
    fun saveService(): Long {
        return 1
    }
}
