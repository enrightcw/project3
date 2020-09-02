import React from 'react';

const Friend = ({friend, removeFriend}) => {
  return (
    <div>
      <li className="list-group-item">
          <strong>Name:</strong> {friend.name}
          <button onClick={(e) => {removeFriend(e, friend) }}
              className="btn btn-danger trash">
          </button>
      </li>
    </div>
  )
}

export default Friend;