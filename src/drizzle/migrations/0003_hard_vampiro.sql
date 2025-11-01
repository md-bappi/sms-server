ALTER TABLE "class" ADD COLUMN "subject" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "class" ADD COLUMN "teacherName" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "class" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "class" ADD COLUMN "updatedAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "subject" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "class" DROP COLUMN "class_name";--> statement-breakpoint
ALTER TABLE "class" DROP COLUMN "teacher_name";--> statement-breakpoint
ALTER TABLE "class" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "class" DROP COLUMN "updated_at";--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN "className";