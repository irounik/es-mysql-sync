create table catalogue (
	id int not null,
	ssn int not null,
    brand_code varchar(255) not null,
    qty int not null,
	created_at timestamp,
	updated_at timestamp,
	primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

create table catalogue_attr(
	id int not null,
	ssn int not null,
	name varchar(255) not null,
	value varchar(255) not null,
	created_at timestamp,
	updated_at timestamp,
	primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- insert into catalogue.catalogue values 
-- (1, 'Adidas', 10, now(), now()),
-- (2, 'Nike', 10, now(), now());

-- insert into catalogue.catalogue_attr values
-- (1, 'color', 'black', now(), now()),
-- (1, 'mrp', '10000', now(), now());

-- insert into catalogue.catalogue_attr values
-- (2, 'color', 'red', now(), now());