/*
  Warnings:

  - You are about to drop the column `gender_id` on the `dog` table. All the data in the column will be lost.
  - You are about to drop the `gender` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sex_id` to the `dog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dog" DROP CONSTRAINT "dog_gender_id_fkey";

-- AlterTable
ALTER TABLE "dog" DROP COLUMN "gender_id",
ADD COLUMN     "sex_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "gender";

-- CreateTable
CREATE TABLE "sex" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "sex_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dog" ADD CONSTRAINT "dog_sex_id_fkey" FOREIGN KEY ("sex_id") REFERENCES "sex"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
