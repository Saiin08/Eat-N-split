import { useState } from "react";

export default function SplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(event) => setBill(Number(event.target.value))}
        />

        <label>💁🏻 Your expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(event) =>
            setPaidByUser(
              Number(event.target.value) > bill
                ? paidByUser
                : Number(event.target.value)
            )
          }
        />

        <label>💁🏻‍♂️ {selectedFriend.name} &apos;s expense</label>
        <input type="text" disabled value={paidByFriend} />

        <label>💰 Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(event) => setWhoIsPaying(event.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <button className="button">Split bill</button>
      </form>
    </>
  );
}
