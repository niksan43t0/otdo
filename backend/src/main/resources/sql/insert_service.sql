INSERT INTO services("name", from_amount, to_amount)
VALUES (:name, :fromAmount, :toAmount)
RETURNING id