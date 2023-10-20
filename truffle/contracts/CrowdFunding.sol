// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity >=0.4.22 <0.9.0;

contract CrowdFunding {
    struct Cause {
        string cause;
        uint256 money;
        uint256 target;
        address person;
        bool ok;
    }

    mapping(string => Cause) public mp;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function createCause(
        string memory cause,
        address dead,
        uint256 target
    ) public {
        require(msg.sender == owner, "You idiot are not the owner");

        Cause memory obj;

        obj = Cause(cause, 0, target, dead, false);

        mp[cause] = obj;
    }

    function getMoney(string memory _cause, uint256 _money) public payable {
        // uint256 a = mp[_cause].target;
        require(msg.value == _money, "Send the mentioned amount only");
        if (mp[_cause].money + _money > mp[_cause].target) {
            uint256 b = mp[_cause].money + _money - mp[_cause].target;
            payable(msg.sender).transfer(b);
            mp[_cause].money = mp[_cause].target;
        } else mp[_cause].money = mp[_cause].money + _money;

        if (mp[_cause].money == mp[_cause].target) distributeMoney(_cause);
    }

    function distributeMoney(string memory _cause) public payable {
        payable(mp[_cause].person).transfer(mp[_cause].target);
        mp[_cause].ok = true;
        mp[_cause].money = 0;
    }
}
