-- CreateTable
CREATE TABLE "user_topics" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "user_topics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_topics" ADD CONSTRAINT "user_topics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_topics" ADD CONSTRAINT "user_topics_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- seed user topics
INSERT INTO user_topics ("userId", "topicId")
SELECT "authorId", "topicId"
FROM snaps
WHERE NOT EXISTS (
  SELECT *
  FROM user_topics
  WHERE user_topics."userId" = snaps."authorId"
    AND user_topics."topicId" = snaps."topicId"
)