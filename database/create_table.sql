CREATE TABLE posts (
	id_post SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description TEXT,
	deleted_status INT DEFAULT 0 CHECK (deleted_status IN (0,1)),
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP 
)