import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ addItem }) => {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.warn("Veuillez rentrer du texte");
      return;
    }
    addItem(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          id="text"
          value={item}
          onChange={(e) => setItem(e.currentTarget.value)}
        />
        <button type="submit" className="btn">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
