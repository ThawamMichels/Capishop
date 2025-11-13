import { INodeProperties } from 'n8n-workflow';

export const fulfillmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['fulfillment'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all fulfillments',
				action: 'Get all fulfillments',
			},
		],
		default: 'getAll',
	},
];

export const fulfillmentFields: INodeProperties[] = [];
