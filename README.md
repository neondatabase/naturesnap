# JSWorld demo

## Getting Started

1. Clone the `main` branch of the repo, move to the directory and run the following command:

```bash
npm install
```

2. Create Neon project along with two databases `neondb` and `shadow`, then add the `DATABASE_URL` and `SHADOW_DATABASE_URL` to the `.env` file:

```
DATABASE_URL=postgres://raouf:k5Fu2zKVlHia@ep-misty-scene-504197.us-east-2.aws.neon.tech/neondb?sslmode=require&connect_timeout=0
SHADOW_DATABASE_URL=postgres://raouf:k5Fu2zKVlHia@ep-misty-scene-504197.us-east-2.aws.neon.tech/shadow?sslmode=require
```

3. Run the following command to migrate the schema:

```bash
npx prisma migrate dev
```

4. Populate the database using the SQL queries in the `/sql/init.sql` file:

   ```sql
   INSERT INTO users ("username", "avatar") VALUES ('anna@example.com', 'me.png');
   INSERT INTO users ("username", "avatar") VALUES ('joe@example.com', 'user1.jpeg');
   ...
   ```

5. Run the following command to start the app:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<img width="1786" alt="Screenshot 2023-02-01 at 15 10 26" src="https://user-images.githubusercontent.com/13738772/216066086-742cbc40-52d8-4ca8-b052-2894dd2c7b90.png">

## Make Schema changes

1. Create a new git branch `dev` using the following command:

```bash
git checkout -b dev
```

2. Create a Neon branch from the `main` branch and copy the new `DATABASE_URL` and `SHADOW_DATABASE_URL` to the `.env` file:

3. In the `schema.prisma`, uncomment lines 20, 40 and from 44-51:

```javascript
model User {
  id      Int    @id @default(autoincrement())
  username String @unique
  avatar String
  snaps   Snap[]
  // topics  UserTopics[]
  @@map("users")
}

...
model Topic {
  id    Int    @id @default(autoincrement())
  name  String
  snaps Snap[]
  // users UserTopics[]
  @@map("topics")
}

// model UserTopics {
//   id      Int    @id @default(autoincrement())
//   user    User @relation(fields: [userId], references: [id])
//   userId  Int
//   topic   Topic @relation(fields: [topicId], references: [id])
//   topicId Int
//   @@map("user_topics")
// }
```

4. Run prisma migrate command and follow the instructions:

```
npx prisma migrate dev
```

5. Run the follow SQL query in the SQL Editor to populate the `user_topics` table with data:

```
INSERT INTO user_topics ("userId", "topicId")
SELECT "authorId", "topicId"
FROM snaps
WHERE NOT EXISTS (
  SELECT *
  FROM user_topics
  WHERE user_topics."userId" = snaps."authorId"
    AND user_topics."topicId" = snaps."topicId"
)
```

6. Run the app using the following command:

```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<img width="1786" alt="Screenshot 2023-02-01 at 15 10 33" src="https://user-images.githubusercontent.com/13738772/216066141-73dd7de9-c0b9-4c1c-9b51-9ea7d49131ee.png">
