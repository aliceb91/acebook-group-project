function TestFriendList({ friends }) {
    return (
        <div className="friend-list">
            <h2>People You Follow</h2>
            {friends.map(friend => (
                <h3 key={friend}>{friend}</h3>
            ))}
        </div>
    );
}

export default TestFriendList;