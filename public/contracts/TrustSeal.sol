// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract TrustSeal {
    uint IDCounter = 1;
    // Data Structures
    // Institution Storage Structure
    struct institutionStruct {
        string Name;
        string Description;
        string Category;
        string Location;
        string Website;
        string Img;
        address institutionOwner;
    }

    struct reviewStruct {
        address reviewerAddress;
        string review;
    }

    uint[] registeredInstititutionsIDs;
    

    mapping(uint => institutionStruct) public registeredInstititutions;
    mapping(uint => reviewStruct[]) public intitutionReviews;

    

    function registerInstitution(
        string memory _Name,
        string memory _Description,
        string memory _Category,
        string memory _Location, 
        string memory _Website,
        string memory _Img
    ) external payable {
        // require(msg.value == 5e15,"Registration failed");
        uint _ID = IDCounter;
        registeredInstititutionsIDs.push(_ID);
        registeredInstititutions[_ID] = institutionStruct({
            Name:_Name,
            Description:_Description,
            Category:_Category,
            Location:_Location,
            Website: _Website,
            Img:_Img,
            institutionOwner:msg.sender
         });

         IDCounter++;
        
    }

    function reviewInsititution(uint _ID, string memory _review ) public {
            intitutionReviews[_ID].push(reviewStruct(msg.sender,_review));
    }

    function getInstitutions(uint _ID) external view returns (institutionStruct memory, uint){
            return (registeredInstititutions[_ID], _ID);
    }

    function getReviews(uint _ID) external view returns(reviewStruct[] memory){
        return (intitutionReviews[_ID]);
    }

    function getInstitutionIds() external view returns(uint[] memory) {
            return registeredInstititutionsIDs;
    }

    receive() external payable {
            
    }
    

}