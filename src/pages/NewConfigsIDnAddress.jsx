export const newAddress = '0x8fE1aa49Ac7D67DBd96Df130e9eC8B4852b880dD'
export const newABI = [
	{
		"inputs": [
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
				"internalType": "uint256",
				"name": "_ID",
				"type": "uint256"
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
	},
	{
		"inputs": [],
		"name": "getInstitutionIds",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ID",
				"type": "uint256"
			}
		],
		"name": "getInstitutions",
		"outputs": [
			{
				"components": [
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
					},
					{
						"internalType": "address",
						"name": "institutionOwner",
						"type": "address"
					}
				],
				"internalType": "struct TrustSeal.institutionStruct",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ID",
				"type": "uint256"
			}
		],
		"name": "getReviews",
		"outputs": [
			{
				"components": [
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
				"internalType": "struct TrustSeal.reviewStruct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
			},
			{
				"internalType": "address",
				"name": "institutionOwner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]