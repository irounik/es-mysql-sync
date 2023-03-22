SELECT * FROM storejini.catalogue 
WHERE storejini.catalogue.updated_at > :sql_last_value;