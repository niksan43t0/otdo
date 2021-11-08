package otdo.services

import otdo.services.model.Service

@org.springframework.stereotype.Service
class ServicesService(private val servicesRepository: ServicesRepository) {
    fun getServices(): List<Service> {
        return servicesRepository.getServices()
    }

    fun saveService(service: Service): Long {
        return if (service.id == null) {
            servicesRepository.createNewService(service)
        } else {
            servicesRepository.editService(service)
            service.id
        }
    }

    fun deleteService(id: Long) {
        servicesRepository.deleteService(id)
    }
}
