package otdo.configuration.web

import org.springframework.core.Ordered
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component
import java.io.IOException
import javax.servlet.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
class SimpleCORSFilter : Filter {

    @Throws(IOException::class, ServletException::class)
    override fun doFilter(req: ServletRequest, res: ServletResponse, chain: FilterChain) {
        val response = res as HttpServletResponse
        val request = req as HttpServletRequest
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Credentials", "true")
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, PATCH")
        response.setHeader("Access-Control-Max-Age", "3600")
        response.setHeader("Access-Control-Expose-Headers", "content-filename")
        response.setHeader("Access-Control-Allow-Headers", "content-type, accept, x-requested-with, authorization, x-ajax-call, language, content-filename, If-Modified-Since,Cache-Control,Pragma")
        if (request.method != "OPTIONS") {
            chain.doFilter(req, res)
        }
    }

    override fun init(filterConfig: FilterConfig?) {}

    override fun destroy() {}
}
