import { INodeProperties } from 'n8n-workflow';

export const metafieldOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['metafield'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all metafields',
				action: 'Get all metafields',
			},
		],
		default: 'getAll',
	},
];

export const metafieldFields: INodeProperties[] = [];
