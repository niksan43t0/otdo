INSERT INTO bigquery_reservation_commitments_real (commitment_plan_id, name, slots, created_at, end_time, status)
VALUES (:plannedCommitmentId, :name, :slots, :createdAt, :endTime, :commitmentStatus);