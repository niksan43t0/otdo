UPDATE services
SET "name"      = :name,
    from_amount = :fromAmount,
    to_amount   = :toAmount
WHERE id = :id