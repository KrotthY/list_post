CREATE TABLE Publication (
	Id_Publication SERIAL PRIMARY KEY,
	Name VARCHAR(100) NOT NULL,
	Description TEXT,
	Deleted_Status INT DEFAULT 0,
	Created_At TIMESTAMP DEFAULT NOW(),
	Updated_At TIMESTAMP 
)