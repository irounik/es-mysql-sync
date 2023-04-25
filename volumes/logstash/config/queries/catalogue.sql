SELECT
	approval.gsn, 
	approval.ssn,
	global.sku_code, 
	global.brand_code, 
	global.barcode, 
	global.uom_qty, 
	global.sub_category_id, 
	seller.org_id, 
	seller.mrp, 
	seller.group_code,
	seller.seller_sku_code,
	approval.created_at,
	approval.updated_at
from catalogue_approval AS approval 
inner join global_catalogue AS global ON approval.gsn = global.gsn
inner join seller_catalogue AS seller ON approval.ssn = seller.ssn
where approval.updated_at > :sql_last_value AND approval.status = 'APPROVED';
