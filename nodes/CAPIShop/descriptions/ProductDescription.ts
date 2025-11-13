import { INodeProperties } from 'n8n-workflow';

export const productOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['product'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new product',
				action: 'Create a product',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a product',
				action: 'Delete a product',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a product',
				action: 'Get a product',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all products',
				action: 'Get all products',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a product',
				action: 'Update a product',
			},
		],
		default: 'getAll',
	},
];

export const productFields: INodeProperties[] = [
	// Fields for Get All
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	
	// Fields for Get
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['get', 'update', 'delete'],
			},
		},
		default: '',
		description: 'ID of the product',
	},
	
	// Fields for Create
	{
		displayName: 'Product Data (JSON)',
		name: 'bodyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
		default: `{
  "name": {
    "pt": "Produto Exemplo"
  },
  "description": {
    "pt": "Descrição do produto"
  },
  "price": "99.90",
  "stock": 10,
  "published": true
}`,
		description: 'Product data in JSON format',
	},
	
	// Fields for Update
	{
		displayName: 'Update Data (JSON)',
		name: 'bodyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['update'],
			},
		},
		default: `{
  "price": "109.90",
  "stock": 15
}`,
		description: 'Fields to update in JSON format',
	},
	
	// Additional Options
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Published',
				name: 'published',
				type: 'boolean',
				default: true,
				description: 'Whether to filter by published status',
			},
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'string',
				default: '',
				description: 'Filter by category ID',
			},
			{
				displayName: 'Created At Min',
				name: 'created_at_min',
				type: 'dateTime',
				default: '',
				description: 'Filter products created after this date',
			},
			{
				displayName: 'Created At Max',
				name: 'created_at_max',
				type: 'dateTime',
				default: '',
				description: 'Filter products created before this date',
			},
		],
	},
];
