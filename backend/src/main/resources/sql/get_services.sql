SELECT id, "name", from_amount, to_amount
FROM services
WHERE del_flag = FALSE
ORDER BY id