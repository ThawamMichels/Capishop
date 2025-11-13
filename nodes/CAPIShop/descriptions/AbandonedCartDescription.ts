import { INodeProperties } from 'n8n-workflow';

export const abandonedCartOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['abandonedCart'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all abandoned carts',
				action: 'Get all abandoned carts',
			},
		],
		default: 'getAll',
	},
];

export const abandonedCartFields: INodeProperties[] = [];
