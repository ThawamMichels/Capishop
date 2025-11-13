import { INodeProperties } from 'n8n-workflow';

export const orderOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['order'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get an order',
				action: 'Get an order',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all orders',
				action: 'Get all orders',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an order',
				action: 'Update an order',
			},
		],
		default: 'getAll',
	},
];

export const orderFields: INodeProperties[] = [
	// Fields for Get All
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['order'],
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
				resource: ['order'],
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
	
	// Fields for Get & Update
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['order'],
				operation: ['get', 'update'],
			},
		},
		default: '',
		description: 'ID of the order',
	},
	
	// Fields for Update
	{
		displayName: 'Update Data (JSON)',
		name: 'bodyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['order'],
				operation: ['update'],
			},
		},
		default: `{
  "status": "closed",
  "note": "Pedido processado com sucesso"
}`,
		description: 'Fields to update in JSON format',
	},
	
	// Additional Options for Get All
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['order'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Closed',
						value: 'closed',
					},
					{
						name: 'Cancelled',
						value: 'cancelled',
					},
				],
				default: 'open',
				description: 'Filter by order status',
			},
			{
				displayName: 'Payment Status',
				name: 'payment_status',
				type: 'options',
				options: [
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'Authorized',
						value: 'authorized',
					},
					{
						name: 'Paid',
						value: 'paid',
					},
					{
						name: 'Voided',
						value: 'voided',
					},
					{
						name: 'Refunded',
						value: 'refunded',
					},
				],
				default: 'pending',
				description: 'Filter by payment status',
			},
			{
				displayName: 'Shipping Status',
				name: 'shipping_status',
				type: 'options',
				options: [
					{
						name: 'Unpacked',
						value: 'unpacked',
					},
					{
						name: 'Packed',
						value: 'packed',
					},
					{
						name: 'Fulfilled',
						value: 'fulfilled',
					},
				],
				default: 'unpacked',
				description: 'Filter by shipping status',
			},
			{
				displayName: 'Created At Min',
				name: 'created_at_min',
				type: 'dateTime',
				default: '',
				description: 'Filter orders created after this date',
			},
			{
				displayName: 'Created At Max',
				name: 'created_at_max',
				type: 'dateTime',
				default: '',
				description: 'Filter orders created before this date',
			},
		],
	},
];
