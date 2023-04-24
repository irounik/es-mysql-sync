SELECT 
	mapping.ssn, 
	attribute.attribute_code, 
	mapping.value,
	mapping.updated_at
FROM storejini.catalogue_attribute_mapping AS mapping 
LEFT JOIN storejini.attribute AS attribute 
ON attribute.id = mapping.attribute_id
WHERE mapping.updated_at > :sql_last_value