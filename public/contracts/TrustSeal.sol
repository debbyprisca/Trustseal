// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract TrustSeal {

    // Data Structures
    // Institution Storage Structure
    struct institutionStruct {
        string Name;
        string Description;
        string Category;
        string Location;
        string Website;
        string Img;
    }

    struct reviewStruct {
        address reviewerAddress;
        string review;
    }

    string[] registeredInstititutionsIDs;
    

    mapping(string => institutionStruct) public registeredInstititutions;
    mapping(string => reviewStruct[]) public intitutionReviews;

    

    function registerInstitution(
        string memory _ID,
        string memory _Name,
        string memory _Description,
        string memory _Category,
        string memory _Location, 
        string memory _Website,
        string memory _Img
    ) external payable {
        require(msg.value == 5e15,"Registration failed");
        registeredInstititutionsIDs.push(_ID);
        registeredInstititutions[_ID] = institutionStruct({
            Name:_Name,
            Description:_Description,
            Category:_Category,
            Location:_Location,
            Website: _Website,
            Img:_Img
         });
        
    }

    function reviewInsititution(string memory _ID, string memory _review ) public {
            intitutionReviews[_ID].push(reviewStruct(msg.sender,_review));
    }

    receive() external payable {
            
    }
    

}