package otdo.services

import org.springframework.web.bind.annotation.*
import otdo.services.model.Service

@RestController
@RequestMapping("/services")
class ServicesController(private val servicesService: ServicesService) {

    @GetMapping
    fun getServices(): List<Service> {
        return servicesService.getServices()
    }

    @PostMapping
    fun saveService(@RequestBody service: Service): Long {
        return servicesService.saveService(service)
    }

    @DeleteMapping("/{id}")
    fun deleteService(@PathVariable("id") id: Long) {
        servicesService.deleteService(id)
    }
}