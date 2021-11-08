package otdo.database

import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.lang.invoke.MethodHandles

@Component("sqlLoader")
class SqlLoader {
    private val logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass().canonicalName)

    companion object Companion { // SQL constants are here and file with the same lowercase name inside the /resources/sql folder
        lateinit var GET_SERVICES: String
        lateinit var INSERT_SERVICE: String
        lateinit var UPDATE_SERVICE: String
        lateinit var DELETE_SERVICE: String
    }

    constructor()

    @Autowired
    constructor(@Value("\${sql.container}") sqlPath: String) {
        SqlLoader().javaClass.fields
            .filter { it.name != "Companion" }
            .forEach {
                it.isAccessible = true
                val fieldName: String
                try {
                    fieldName = getSQLStatement(sqlPath, it.name.lowercase() + ".sql")
                } catch (e: Exception) {
                    println("Missing file: $sqlPath ${it.name.lowercase()}.sql")
                    throw e
                }

                try {
                    it.set(this, fieldName)
                } catch (iae: IllegalAccessException) {
                    logger.error("IllegalAccessException during SQL statement load", iae)
                    throw RuntimeException("IllegalAccessException during SQL statement load", iae)
                }
            }
    }

    private fun getSQLStatement(sqlPath: String, sqlFileName: String): String {
        val filePath = "/$sqlPath/$sqlFileName"
        return this::class.java.getResource(filePath)!!.readText(Charsets.UTF_8)
    }
}
