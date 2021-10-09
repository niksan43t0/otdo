package otdo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableScheduling
open class OtDoApplication

fun main(args: Array<String>) {
    runApplication<OtDoApplication>(*args) {
        addInitializers()
    }
}
