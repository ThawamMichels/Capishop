import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';

import {
	nuvemshopApiRequest,
	nuvemshopApiRequestAllItems,
} from './GenericFunctions';

// Importar todas as descriptions
import { productOperations, productFields } from './descriptions/ProductDescription';
import { orderOperations, orderFields } from './descriptions/OrderDescription';
import { customerOperations, customerFields } from './descriptions/CustomerDescription';
import { categoryOperations, categoryFields } from './descriptions/CategoryDescription';
import { variantOperations, variantFields } from './descriptions/VariantDescription';
import { imageOperations, imageFields } from './descriptions/ImageDescription';
import { couponOperations, couponFields } from './descriptions/CouponDescription';
import { webhookOperations, webhookFields } from './descriptions/WebhookDescription';
import { scriptOperations, scriptFields } from './descriptions/ScriptDescription';
import { transactionOperations, transactionFields } from './descriptions/TransactionDescription';
import { locationOperations, locationFields } from './descriptions/LocationDescription';
import { pageOperations, pageFields } from './descriptions/PageDescription';
import { abandonedCartOperations, abandonedCartFields } from './descriptions/AbandonedCartDescription';
import { fulfillmentOperations, fulfillmentFields } from './descriptions/FulfillmentDescription';
import { metafieldOperations, metafieldFields } from './descriptions/MetafieldDescription';

export class CAPIShop implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CAPIShop',
		name: 'capiShop',
		icon: 'file:logo.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Integração completa com Nuvemshop API',
		defaults: {
			name: 'CAPIShop',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'nuvemshopApi',
				required: true,
			},
		],
		properties: [
			// Resource Selector
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Product',
						value: 'product',
					},
					{
						name: 'Order',
						value: 'order',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Category',
						value: 'category',
					},
					{
						name: 'Variant',
						value: 'variant',
					},
					{
						name: 'Image',
						value: 'image',
					},
					{
						name: 'Coupon',
						value: 'coupon',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
					{
						name: 'Script',
						value: 'script',
					},
					{
						name: 'Transaction',
						value: 'transaction',
					},
					{
						name: 'Location',
						value: 'location',
					},
					{
						name: 'Page',
						value: 'page',
					},
					{
						name: 'Abandoned Cart',
						value: 'abandonedCart',
					},
					{
						name: 'Fulfillment',
						value: 'fulfillment',
					},
					{
						name: 'Metafield',
						value: 'metafield',
					},
				],
				default: 'product',
			},
			// Operations & Fields para cada recurso
			...productOperations,
			...productFields,
			...orderOperations,
			...orderFields,
			...customerOperations,
			...customerFields,
			...categoryOperations,
			...categoryFields,
			...variantOperations,
			...variantFields,
			...imageOperations,
			...imageFields,
			...couponOperations,
			...couponFields,
			...webhookOperations,
			...webhookFields,
			...scriptOperations,
			...scriptFields,
			...transactionOperations,
			...transactionFields,
			...locationOperations,
			...locationFields,
			...pageOperations,
			...pageFields,
			...abandonedCartOperations,
			...abandonedCartFields,
			...fulfillmentOperations,
			...fulfillmentFields,
			...metafieldOperations,
			...metafieldFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				// PRODUCT RESOURCE
				if (resource === 'product') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
						
						if (returnAll) {
							const data = await nuvemshopApiRequestAllItems.call(
								this,
								'GET',
								'/products',
								{},
								additionalFields,
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const data = await nuvemshopApiRequest.call(
								this,
								'GET',
								'/products',
								{},
								{ ...additionalFields, per_page: limit },
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						}
					}
					
					if (operation === 'get') {
						const productId = this.getNodeParameter('productId', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'GET',
							`/products/${productId}`,
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'create') {
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'POST',
							'/products',
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'update') {
						const productId = this.getNodeParameter('productId', i) as string;
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'PUT',
							`/products/${productId}`,
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'delete') {
						const productId = this.getNodeParameter('productId', i) as string;
						await nuvemshopApiRequest.call(
							this,
							'DELETE',
							`/products/${productId}`,
						);
						returnData.push({ json: { success: true, productId } });
					}
				}
				
				// ORDER RESOURCE
				if (resource === 'order') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const additionalFields = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
						
						if (returnAll) {
							const data = await nuvemshopApiRequestAllItems.call(
								this,
								'GET',
								'/orders',
								{},
								additionalFields,
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const data = await nuvemshopApiRequest.call(
								this,
								'GET',
								'/orders',
								{},
								{ ...additionalFields, per_page: limit },
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						}
					}
					
					if (operation === 'get') {
						const orderId = this.getNodeParameter('orderId', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'GET',
							`/orders/${orderId}`,
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'update') {
						const orderId = this.getNodeParameter('orderId', i) as string;
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'PUT',
							`/orders/${orderId}`,
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
				}
				
				// CUSTOMER RESOURCE
				if (resource === 'customer') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						
						if (returnAll) {
							const data = await nuvemshopApiRequestAllItems.call(
								this,
								'GET',
								'/customers',
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const data = await nuvemshopApiRequest.call(
								this,
								'GET',
								'/customers',
								{},
								{ per_page: limit },
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						}
					}
					
					if (operation === 'get') {
						const customerId = this.getNodeParameter('customerId', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'GET',
							`/customers/${customerId}`,
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'create') {
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'POST',
							'/customers',
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'update') {
						const customerId = this.getNodeParameter('customerId', i) as string;
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'PUT',
							`/customers/${customerId}`,
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'delete') {
						const customerId = this.getNodeParameter('customerId', i) as string;
						await nuvemshopApiRequest.call(
							this,
							'DELETE',
							`/customers/${customerId}`,
						);
						returnData.push({ json: { success: true, customerId } });
					}
				}
				
				// CATEGORY RESOURCE
				if (resource === 'category') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						
						if (returnAll) {
							const data = await nuvemshopApiRequestAllItems.call(
								this,
								'GET',
								'/categories',
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const data = await nuvemshopApiRequest.call(
								this,
								'GET',
								'/categories',
								{},
								{ per_page: limit },
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						}
					}
					
					if (operation === 'get') {
						const categoryId = this.getNodeParameter('categoryId', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'GET',
							`/categories/${categoryId}`,
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'create') {
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'POST',
							'/categories',
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'update') {
						const categoryId = this.getNodeParameter('categoryId', i) as string;
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'PUT',
							`/categories/${categoryId}`,
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'delete') {
						const categoryId = this.getNodeParameter('categoryId', i) as string;
						await nuvemshopApiRequest.call(
							this,
							'DELETE',
							`/categories/${categoryId}`,
						);
						returnData.push({ json: { success: true, categoryId } });
					}
				}
				
				// VARIANT RESOURCE
				if (resource === 'variant') {
					if (operation === 'getAll') {
						const productId = this.getNodeParameter('productId', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'GET',
							`/products/${productId}/variants`,
						);
						returnData.push(...data.map((item: any) => ({ json: item })));
					}
				}
				
				// IMAGE RESOURCE
				if (resource === 'image') {
					const productId = this.getNodeParameter('productId', i) as string;
					
					if (operation === 'getAll') {
						const data = await nuvemshopApiRequest.call(
							this,
							'GET',
							`/products/${productId}/images`,
						);
						returnData.push(...data.map((item: any) => ({ json: item })));
					}
					
					if (operation === 'create') {
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'POST',
							`/products/${productId}/images`,
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'delete') {
						const imageId = this.getNodeParameter('imageId', i) as string;
						await nuvemshopApiRequest.call(
							this,
							'DELETE',
							`/products/${productId}/images/${imageId}`,
						);
						returnData.push({ json: { success: true, imageId } });
					}
				}
				
				// WEBHOOK RESOURCE
				if (resource === 'webhook') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						
						if (returnAll) {
							const data = await nuvemshopApiRequestAllItems.call(
								this,
								'GET',
								'/webhooks',
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const data = await nuvemshopApiRequest.call(
								this,
								'GET',
								'/webhooks',
								{},
								{ per_page: limit },
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						}
					}
					
					if (operation === 'get') {
						const webhookId = this.getNodeParameter('webhookId', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'GET',
							`/webhooks/${webhookId}`,
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'create') {
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'POST',
							'/webhooks',
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'update') {
						const webhookId = this.getNodeParameter('webhookId', i) as string;
						const body = this.getNodeParameter('bodyJson', i) as string;
						const data = await nuvemshopApiRequest.call(
							this,
							'PUT',
							`/webhooks/${webhookId}`,
							JSON.parse(body),
						);
						returnData.push({ json: data });
					}
					
					if (operation === 'delete') {
						const webhookId = this.getNodeParameter('webhookId', i) as string;
						await nuvemshopApiRequest.call(
							this,
							'DELETE',
							`/webhooks/${webhookId}`,
						);
						returnData.push({ json: { success: true, webhookId } });
					}
				}
				
				// COUPON RESOURCE
				if (resource === 'coupon') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						
						if (returnAll) {
							const data = await nuvemshopApiRequestAllItems.call(
								this,
								'GET',
								'/coupons',
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const data = await nuvemshopApiRequest.call(
								this,
								'GET',
								'/coupons',
								{},
								{ per_page: limit },
							);
							returnData.push(...data.map((item: any) => ({ json: item })));
						}
					}
				}
				
				// SIMPLE GET ALL RESOURCES
				const simpleResources = ['script', 'transaction', 'location', 'page', 'abandonedCart', 'fulfillment', 'metafield'];
				const resourceEndpoints: { [key: string]: string } = {
					script: '/scripts',
					transaction: '/transactions',
					location: '/locations',
					page: '/pages',
					abandonedCart: '/abandoned_carts',
					fulfillment: '/fulfillments',
					metafield: '/metafields',
				};
				
				if (simpleResources.includes(resource) && operation === 'getAll') {
					const data = await nuvemshopApiRequest.call(
						this,
						'GET',
						resourceEndpoints[resource],
					);
					returnData.push(...data.map((item: any) => ({ json: item })));
				}
				
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: error.message,
						},
						pairedItem: {
							item: i,
						},
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
