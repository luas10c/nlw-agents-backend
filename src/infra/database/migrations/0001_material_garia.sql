CREATE TABLE "questions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"question" text NOT NULL,
	"answer" text,
	"room_id" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_room_id_rooms_id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("id") ON DELETE no action ON UPDATE no action;