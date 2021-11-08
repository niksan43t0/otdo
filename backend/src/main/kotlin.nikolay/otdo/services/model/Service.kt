package otdo.services.model

import java.math.BigDecimal

data class Service(
    val id: Long? = null,
    val name: String,
    val fromAmount: BigDecimal,
    val toAmount: BigDecimal? = null,
)