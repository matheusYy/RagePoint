/*
  Warnings:

  - Added the required column `hoursLeft` to the `Point` table without a default value. This is not possible if the table is not empty.
  - Added the required column `missingHours` to the `Point` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notPoint` to the `Point` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Point" (
    "name" TEXT,
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "initialPoint" INTEGER NOT NULL,
    "lauch" INTEGER NOT NULL,
    "exitPoint" INTEGER NOT NULL,
    "notPoint" BOOLEAN NOT NULL,
    "missingHours" BOOLEAN NOT NULL,
    "hoursLeft" BOOLEAN NOT NULL
);
INSERT INTO "new_Point" ("data", "email", "exitPoint", "id", "initialPoint", "lauch", "name") SELECT "data", "email", "exitPoint", "id", "initialPoint", "lauch", "name" FROM "Point";
DROP TABLE "Point";
ALTER TABLE "new_Point" RENAME TO "Point";
CREATE UNIQUE INDEX "Point_email_key" ON "Point"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
