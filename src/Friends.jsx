import React from "react";

export default function Friends({ myFriends, onSelection, selectedFriend }) {
  // const myFriends = initialFriends;

  return (
    <>
      <ul>
        {myFriends.map((friend) => {
          const isSelected = selectedFriend && selectedFriend?.id === friend.id;

          return (
            <React.Fragment key={friend.id}>
              <li className={isSelected ? "selected" : ""}>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>

                {friend.balance < 0 ? (
                  <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}€
                  </p>
                ) : friend.balance > 0 ? (
                  <p className="green">
                    {friend.name} ows you {Math.abs(friend.balance)}€
                  </p>
                ) : (
                  <p>You and {friend.name} are even</p>
                )}

                <button className="button" onClick={() => onSelection(friend)}>
                  {isSelected ? "Close" : "Select"}
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}
