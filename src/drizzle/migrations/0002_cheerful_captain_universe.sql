ALTER TABLE "student" RENAME COLUMN "class_name" TO "classId";--> statement-breakpoint
ALTER TABLE "student" DROP CONSTRAINT "student_class_id_class_id_fk";
--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "className" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "updatedAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_classId_class_id_fk" FOREIGN KEY ("classId") REFERENCES "public"."class"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN "class_id";--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN "updated_at";