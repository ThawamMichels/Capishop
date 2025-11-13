import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class NuvemshopApi implements ICredentialType {
	name = 'nuvemshopApi';
	displayName = 'Nuvemshop API';
	documentationUrl = 'https://github.com/SEU_USUARIO/n8n-nodes-capishop';
	properties: INodeProperties[] = [
		{
			displayName: 'Store ID',
			name: 'storeId',
			type: 'string',
			default: '',
			required: true,
			placeholder: '123456',
			description: 'ID da sua loja Nuvemshop',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			placeholder: 'seu_access_token_aqui',
			description: 'Token de acesso OAuth da API Nuvemshop',
		},
		{
			displayName: 'User Agent',
			name: 'userAgent',
			type: 'string',
			default: 'CAPIShop N8N Integration (support@example.com)',
			required: true,
			description: 'User Agent para identificação nas requisições',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Authentication': '=bearer {{$credentials.accessToken}}',
				'User-Agent': '={{$credentials.userAgent}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '=https://api.tiendanube.com/v1/{{$credentials.storeId}}',
			url: '/store',
			method: 'GET',
		},
	};
}
