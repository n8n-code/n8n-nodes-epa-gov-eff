import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class EpaGovEff implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Epa Gov Eff',
                name: 'N8nDevEpaGovEff',
                icon: { light: 'file:./epa-gov-eff.png', dark: 'file:./epa-gov-eff.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'ECHO is an EPA tool for public enforcement and compliance data access.',
                defaults: { name: 'Epa Gov Eff' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevEpaGovEffApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
