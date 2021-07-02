\echo 'Delete and recreate game_central db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE game_central;
CREATE DATABASE game_central;
\connect game_central

\i game-schema.sql
\i game-seed.sql

\echo 'Delete and recreate game_central_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE game_central_test;
CREATE DATABASE game_central_test;
\connect game_central_test

\i game-schema.sql
