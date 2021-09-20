import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../services";
import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";

export default function Details() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      setRecipe(await getRecipe(id));
      setLoading(false);
    };
    fetchRecipe();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <h4>Ingredients: {recipe.ingredients}</h4>
      <h4>How to make: {recipe.instructions}</h4>
      <h4>Total time til dinner: {recipe.time}</h4>
      <EditButton id={id} />
      <DeleteButton id={id} />
    </div>
  );
}
