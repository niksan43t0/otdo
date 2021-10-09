UPDATE bigquery_reservations
SET issues_on_delete = :issue
WHERE id = :reservationId