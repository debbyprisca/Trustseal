export const ContractAddress="0xF9CeD3cFC47c0D6Fb40F1B6C7A3b26bB58Fe2516"
export const TrustSealABI=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "intitutionReviews",
		"outputs": [
			{
				"internalType": "address",
				"name": "reviewerAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "review",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Website",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Img",
				"type": "string"
			}
		],
		"name": "registerInstitution",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "registeredInstititutions",
		"outputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Website",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Img",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_review",
				"type": "string"
			}
		],
		"name": "reviewInsititution",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]