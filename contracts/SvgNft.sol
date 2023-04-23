// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract SvgNft is ERC721{
    string public imageURI;
    bool set;

    constructor(
    ) ERC721(unicode"desenho ♡", "uwu") {
        _mint(msg.sender, 0);
    }

    function setSvg(string memory svg) external{
        if(!set){
            imageURI = svgToImageURI(svg);
        }
        set = true;
    }

    function svgToImageURI(string memory svg) internal pure returns (string memory) {

        string memory baseURL = "data:image/svg+xml;base64,";
        string memory svgBase64Encoded = Base64.encode(bytes(string(abi.encodePacked(svg))));
        return string(abi.encodePacked(baseURL, svgBase64Encoded));
    }

    function _baseURI() internal pure override returns (string memory) {
        return "data:application/json;base64,";
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return
            string(
                abi.encodePacked(
                    _baseURI(),
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                name(),
                                '", "description":" your description goes here ", ',
                                '"attributes": [{"trait_type": "trait 1", "value": 10}], "image":"',
                                imageURI,
                                '"}'
                            )
                        )
                    )
                )
            );
    }
}
