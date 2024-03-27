/*
  Warnings:

  - The primary key for the `customers` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_customers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "create_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_customers" ("create_at", "email", "id", "name", "status", "update_at") SELECT "create_at", "email", "id", "name", "status", "update_at" FROM "customers";
DROP TABLE "customers";
ALTER TABLE "new_customers" RENAME TO "customers";
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
