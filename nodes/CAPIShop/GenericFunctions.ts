import {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IHttpRequestMethods,
	IRequestOptions,
	IDataObject,
	NodeApiError,
} from 'n8n-workflow';

export async function nuvemshopApiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
): Promise<any> {
	const credentials = await this.getCredentials('nuvemshopApi');
	
	const options: IRequestOptions = {
		method,
		headers: {
			'Authentication': `bearer ${credentials.accessToken}`,
			'User-Agent': credentials.userAgent as string,
			'Content-Type': 'application/json',
		},
		body,
		qs,
		uri: uri || `https://api.tiendanube.com/v1/${credentials.storeId}${endpoint}`,
		json: true,
	};

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	try {
		return await this.helpers.request(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

export async function nuvemshopApiRequestAllItems(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<any> {
	const returnData: IDataObject[] = [];
	let page = 1;
	const perPage = 200; // Máximo permitido pela API
	
	let responseData;
	
	do {
		qs.page = page;
		qs.per_page = perPage;
		
		responseData = await nuvemshopApiRequest.call(this, method, endpoint, body, qs);
		
		if (Array.isArray(responseData)) {
			returnData.push(...responseData);
		} else {
			returnData.push(responseData);
		}
		
		page++;
	} while (responseData.length === perPage);
	
	return returnData;
}
