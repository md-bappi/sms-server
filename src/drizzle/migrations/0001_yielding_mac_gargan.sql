CREATE TABLE "class" (
	"id" serial PRIMARY KEY NOT NULL,
	"class_name" varchar(50) NOT NULL,
	"teacher_name" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "class_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_class_id_class_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."class"("id") ON DELETE no action ON UPDATE no action;