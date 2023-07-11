import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          editItem={editItem}
          removeItem={removeItem}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};
export default Items;
