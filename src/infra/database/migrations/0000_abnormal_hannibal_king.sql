CREATE TABLE "rooms" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"updated_at" timestamp,
	"created_at" timestamp NOT NULL
);
