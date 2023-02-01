INSERT INTO user_topics ("userId", "topicId")
SELECT "authorId", "topicId"
FROM snaps
WHERE NOT EXISTS (
  SELECT *
  FROM user_topics
  WHERE user_topics."userId" = snaps."authorId"
    AND user_topics."topicId" = snaps."topicId"
)