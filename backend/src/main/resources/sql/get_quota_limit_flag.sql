SELECT quota_limit_hit_on
FROM bigquery_reservations br
WHERE br.id = :reservationId