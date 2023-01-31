/*
  Warnings:

  - You are about to drop the `user_topics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_topics" DROP CONSTRAINT "user_topics_topicId_fkey";

-- DropForeignKey
ALTER TABLE "user_topics" DROP CONSTRAINT "user_topics_userId_fkey";

-- DropTable
DROP TABLE "user_topics";
