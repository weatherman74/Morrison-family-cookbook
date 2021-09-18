import { toast } from "react-toastify";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { newRecipe } from "../../services";
import Form from "./Form";

export default function New() {
  // toast("Recipe added to cookbook!")

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      image,
      name,
      ingredients,
      instructions,
      time,
    };
    await newRecipe(fields);
    history.push("/");
  };

  return (
    <div>
      <Form
        name={name}
        setName={setName}
        ingredients={ingredients}
        setIngredients={setIngredients}
        instructions={instructions}
        setInstructions={setInstructions}
        time={time}
        setTime={setTime}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
