SELECT 
	cat_attr_map.ssn, 
	attribute_code, 
	value, 
	cat_approval.updated_at
FROM catalogue_attribute_mapping AS cat_attr_map
INNER JOIN catalogue_attribute AS attr ON attr.id = cat_attr_map.attribute_id
INNER JOIN catalogue_approval AS cat_approval ON cat_approval.ssn = cat_attr_map.ssn
WHERE cat_approval.updated_at > :sql_last_value AND cat_approval.status = 'APPROVED';