import { createContext, useRef, useState } from "react";

export const WriteContext = createContext();

export const WriteProvider = ({ children }) => {
  const [ingredientGroups, setIngredientGroups] = useState([{}, {}]);
  const [recipeContGroups, setRecipeContGroups] = useState([{}]);

  const [recipeInfo, setRecipeInfo] = useState({
    USER_ID: "",
    RECIPE_TITLE: "",
    RECIPE_DESCR: "",
    RECIPE_CTG: "",
    RECIPE_IMG: "",
  });

  console.log(recipeInfo);

  const recipeInfoChange = (value, type) => {
    setRecipeInfo({
      ...recipeInfo,
      [type]: value,
    });
  };

  const ctgChange = (value) => {
    setRecipeInfo({
      ...recipeInfo,
      RECIPE_CTG: value,
    });
  };

  // 재료 관련
  const addIngGroup = () => {
    setIngredientGroups([...ingredientGroups, {}]);
  };

  const removeIngGroup = (index) => {
    if (ingredientGroups.length === 2) {
      alert("최소 두 개의 재료는 추가되어야 합니다.");
      return;
    }
    const newGroups = ingredientGroups.filter((_, idx) => idx !== index);
    setIngredientGroups(newGroups);
  };

  // 레시피 순서 관련
  const addRecipeGroup = () => {
    setRecipeContGroups([...recipeContGroups, {}]);
  };

  const removeRecipeGroup = (index) => {
    if (recipeContGroups.length === 1) {
      alert("최소 한 개의 레시피는 작성되어야 합니다.");
      return;
    }
    const newGroups = recipeContGroups.filter((_, idx) => idx !== index);
    setRecipeContGroups(newGroups);
  };

  // 이미지 업로드
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setRecipeInfo({
          ...recipeInfo,
          RECIPE_IMG: reader.result,
        });
      };
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <WriteContext.Provider
      value={{
        addIngGroup,
        removeIngGroup,
        ingredientGroups,
        addRecipeGroup,
        removeRecipeGroup,
        recipeContGroups,
        handleUploadButtonClick,
        handleImageUpload,
        imageSrc,
        fileInputRef,
        recipeInfoChange,
        ctgChange,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
};
