import { createContext, useContext, useRef, useState } from "react";
import supabase from "../../base-camp/supabaseClient";
import { UserContext } from "./UserContext";

export const WriteContext = createContext();

export const WriteProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  // 초기값 설정
  const initRecipeInfo = {
    USER_ID: user?.id || null,
    RECIPE_TITLE: "",
    RECIPE_DESCR: "",
    RECIPE_CTG: "",
    RECIPE_IMG: "",
  };

  const initIngInfo = [
    {
      RECIPE_ID: 0,
      ING_NAME: "",
      ING_VOL: "",
    },
    {
      RECIPE_ID: 0,
      ING_NAME: "",
      ING_VOL: "",
    },
  ];

  console.log(initRecipeInfo);

  // 인풋 추가할 때 사용하는 state
  const [ingredientGroups, setIngredientGroups] = useState(initIngInfo);
  const [recipeContGroups, setRecipeContGroups] = useState([{}]);

  // 데이터 베이스 보낼 레시피 정보 state
  const [recipeInfo, setRecipeInfo] = useState(initRecipeInfo);
  const [ingInfo, setIngInfo] = useState({});

  // 입력창에서 받아온 info value 저장하는 onChange 함수
  const recipeInfoChange = (value, type) => {
    setRecipeInfo({
      ...recipeInfo,
      [type]: value,
    });
  };

  // 카테고리도!!
  const ctgChange = (value) => {
    setRecipeInfo({
      ...recipeInfo,
      RECIPE_CTG: value,
    });
  };

  // 입력창에서 받아온 ing value 저장하는 onChange 함수
  const ingInfoChange = (value, type, index) => {
    ingredientGroups[index] = { ...ingredientGroups[index], [type]: value };
    setIngInfo([...ingredientGroups]);
  };

  console.log(ingInfo);

  // 저장버튼 누르면 다 보내버리기
  const saveRecipe = async () => {
    await supabase.from("recipe_info").insert([recipeInfo]);
    await supabase.from("recipe_ingredient").insert(ingInfo);
    setRecipeInfo(initRecipeInfo);
    setIngredientGroups(initIngInfo);
  };

  // 재료 그룹 추가하는 onClick 함수
  const addIngGroup = () => {
    setIngredientGroups([...ingredientGroups, {}]);
  };

  // 재료 그룹 삭제하는 onClick 함수
  const removeIngGroup = (index) => {
    if (ingredientGroups.length === 2) {
      alert("최소 두 개의 재료는 추가되어야 합니다.");
      return;
    }
    const newGroups = ingredientGroups.filter((_, idx) => idx !== index);
    setIngredientGroups(newGroups);
  };

  // 레시피 순서 추가하는 onClick 함수
  const addRecipeGroup = () => {
    setRecipeContGroups([...recipeContGroups, {}]);
  };

  // 재료 그룹 삭제하는 onClick 함수
  const removeRecipeGroup = (index) => {
    if (recipeContGroups.length === 1) {
      alert("최소 한 개의 레시피는 작성되어야 합니다.");
      return;
    }
    const newGroups = recipeContGroups.filter((_, idx) => idx !== index);
    setRecipeContGroups(newGroups);
  };

  // 이미지 미리보기 실행하는 부분
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

  // 버튼이랑 인풋 연결하는 함수
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
        saveRecipe,
        ingInfoChange,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
};
