import { INodeProperties } from 'n8n-workflow';

export const locationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['location'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all locations',
				action: 'Get all locations',
			},
		],
		default: 'getAll',
	},
];

export const locationFields: INodeProperties[] = [];
