package otdo.services

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import otdo.services.model.Service
import java.math.BigDecimal

@RestController
@RequestMapping("/services")
class ServicesController {

    @GetMapping
    fun getServices(): List<Service> {
        return listOf(Service(1, "Подгъв", BigDecimal.TEN, BigDecimal.TEN))
    }
}
