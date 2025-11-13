import { INodeProperties } from 'n8n-workflow';

export const scriptOperations: INodeProperties[] = [
{
displayName: 'Operation',
name: 'operation',
type: 'options',
noDataExpression: true,
displayOptions: {
show: {
resource: ['script'],
},
},
options: [
{
name: 'Get All',
value: 'getAll',
description: 'Get all scripts',
action: 'Get all scripts',
},
],
default: 'getAll',
},
];

export const scriptFields: INodeProperties[] = [];
