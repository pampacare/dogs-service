-- CreateTable
CREATE TABLE "area" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "neighborhood" TEXT,
    "street" TEXT,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "complement" TEXT,
    "area_id" INTEGER NOT NULL,

    CONSTRAINT "owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "breed" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "breed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gender" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dog" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "born_year" INTEGER,
    "is_dead" BOOLEAN NOT NULL DEFAULT false,
    "wear_collar" BOOLEAN NOT NULL,
    "gender_id" INTEGER NOT NULL,
    "owner_id" TEXT NOT NULL,
    "breed_id" INTEGER NOT NULL,

    CONSTRAINT "dog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "owner" ADD CONSTRAINT "owner_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dog" ADD CONSTRAINT "dog_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dog" ADD CONSTRAINT "dog_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dog" ADD CONSTRAINT "dog_breed_id_fkey" FOREIGN KEY ("breed_id") REFERENCES "breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
