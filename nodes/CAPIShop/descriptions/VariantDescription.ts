import { INodeProperties } from 'n8n-workflow';

export const variantOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['variant'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all variants of a product',
				action: 'Get all variants',
			},
		],
		default: 'getAll',
	},
];

export const variantFields: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['variant'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'ID of the product',
	},
];
