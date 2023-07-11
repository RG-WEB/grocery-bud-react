import { useState, useEffect } from "react";
import Form from "./Form.jsx";
import Items from "./Items.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState([]);

  const setLocalStorage = (newArray) => {
    localStorage.setItem("stockItems", JSON.stringify(newArray));
  };

  const addItem = (item) => {
    const newItem = { id: nanoid(), name: item, completed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    toast.success("Vous avez ajouté un élément ");
    setLocalStorage(newItems);
  };

  const removeItem = (id) => {
    const filteredItem = items.filter((item) => item.id !== id);
    setItems(filteredItem);
    toast.error("Vous avez supprimé un element");
    setLocalStorage(filteredItem);
  };

  const editItem = (id, completed) => {
    items.map((item) => {
      if (item.id === id) {
        item.completed = !completed;
      }
    });
    setLocalStorage(items);
    setItems(JSON.parse(localStorage.getItem("stockItems")));
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("stockItems"))
      ? setItems(JSON.parse(localStorage.getItem("stockItems")))
      : setItems([]);
  }, []);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};
export default App;
