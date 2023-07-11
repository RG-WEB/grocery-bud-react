const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, name, completed } = item;

  return (
    <>
      <div className="single-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => editItem(id, completed)}
        />
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>
          {name}
        </p>
        <button className="remove-btn btn" onClick={() => removeItem(id)}>
          SUPPRIMER
        </button>
      </div>
    </>
  );
};
export default SingleItem;
