import { INodeProperties } from 'n8n-workflow';

export const imageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['image'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Upload a product image',
				action: 'Upload an image',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a product image',
				action: 'Delete an image',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all images of a product',
				action: 'Get all images',
			},
		],
		default: 'getAll',
	},
];

export const imageFields: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['getAll', 'create', 'delete'],
			},
		},
		default: '',
		description: 'ID of the product',
	},
	{
		displayName: 'Image ID',
		name: 'imageId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the image',
	},
	{
		displayName: 'Image Data (JSON)',
		name: 'bodyJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['create'],
			},
		},
		default: `{
  "src": "https://example.com/image.jpg"
}`,
		description: 'Image data in JSON format',
	},
];
