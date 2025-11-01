CREATE TABLE "classes" (
	"id" serial PRIMARY KEY NOT NULL,
	"class_name" varchar(50) NOT NULL,
	"teacher_name" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "class" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "class" CASCADE;--> statement-breakpoint
ALTER TABLE "student" DROP CONSTRAINT "student_classId_class_id_fk";
--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "class_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN "subject";--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN "classId";--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN "createdAt";--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN "updatedAt";--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_email_unique" UNIQUE("email");