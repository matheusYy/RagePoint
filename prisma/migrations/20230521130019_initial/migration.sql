-- CreateTable
CREATE TABLE "Point" (
    "name" TEXT,
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "initialPoint" INTEGER NOT NULL,
    "lauch" INTEGER NOT NULL,
    "exitPoint" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Point_email_key" ON "Point"("email");
