const mapper = require('./mapper');

// CREATE TABLE IF NOT EXISTS "exercise" (
//     "id" timeuuid,
//     "course_id" uuid,
//     "teacher_id" uuid,
//     "title" text,
//     "deadline" timestamp,
//     "content" text,
//     PRIMARY KEY (("teacher_id", "course_id"), "id")
// ) WITH CLUSTERING ORDER BY ("id" DESC);
module.exports = mapper.forModel('exercise');
