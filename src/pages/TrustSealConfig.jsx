export const ContractAddress="0x80037d300bA4Da75c559F9F8bA7Dd50D3A51A691"
export const sepoliaAddress = '0x9e80243C7e1D09e951f3Eacea297D6F07A51CE79'
export const BaseMainnetAddress='0xFb6f734b15cdEDaD8A329940bADEe737e135495A'

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