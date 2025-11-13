import { INodeProperties } from 'n8n-workflow';

export const categoryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['category'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new category',
				action: 'Create a category',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a category',
				action: 'Delete a category',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a category',
				action: 'Get a category',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all categories',
				action: 'Get all categories',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a category',
				action: 'Update a category',
			},
		],
		default: 'getAll',
	},
];

export const categoryFields: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['category'],
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
				resource: ['category'],
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
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['get', 'update', 'delete'],
			},
		},
		default: '',
		description: 'ID of the category',
	},
	{
		displayName: 'Category Data (JSON)',
		name: 'bodyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['create'],
			},
		},
		default: `{
  "name": {
    "pt": "Eletrônicos"
  },
  "description": {
    "pt": "Produtos eletrônicos"
  }
}`,
		description: 'Category data in JSON format',
	},
	{
		displayName: 'Update Data (JSON)',
		name: 'bodyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['update'],
			},
		},
		default: `{
  "name": {
    "pt": "Eletrônicos Atualizado"
  }
}`,
		description: 'Fields to update in JSON format',
	},
];
