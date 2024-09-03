import { createContext, useEffect, useRef, useState } from "react";
import supabase from "../../base-camp/supabaseClient";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate, useParams } from "react-router-dom";

export const WriteContext = createContext();

export const WriteProvider = ({ children }) => {
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
          RECIPE_IMG: reader.result
        });
      };
    }
  };

  // 버튼이랑 인풋 연결하는 함수
  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };
  // 작성 후 상세페이지 이동을 위한
  const navigate = useNavigate();

  // edit인가요?
  const pathArray = window.location.pathname.split("/");
  const path = pathArray[pathArray.length - 2];

  // edit이면 아이디 따와
  const params = useParams();
  const editId = Number(params.id);

  // 초기값 설정
  const initRecipeInfo = {
    RECIPE_TITLE: "",
    RECIPE_DESCR: "",
    RECIPE_CTG: "",
    RECIPE_IMG: ""
  };

  const initIngInfo = [
    {
      ING_NAME: "",
      ING_VOL: ""
    },
    {
      ING_NAME: "",
      ING_VOL: ""
    }
  ];

  const initRecipeCont = [
    {
      RECIPE_STEP: "0",
      RECIPE_CONT: ""
    }
  ];

  // 인풋 추가할 때 사용하는 state
  const [ingredientGroups, setIngredientGroups] = useState(initIngInfo);
  const [recipeContGroups, setRecipeContGroups] = useState(initRecipeCont);

  // 데이터 베이스 보낼 레시피 정보 state
  const [recipeInfo, setRecipeInfo] = useState(initRecipeInfo);

  // edit 일때는 밸류 채워주기
  if (path === "edit") {
    useEffect(() => {
      const getData = async () => {
        const { data: info } = await supabase.from("recipe_info").select("*").eq("RECIPE_ID", editId);
        setRecipeInfo(...info);
        setImageSrc(info[0].RECIPE_IMG);
        const { data: ingInfo } = await supabase
          .from("recipe_ingredient")
          .select("ING_NAME,ING_VOL")
          .eq("RECIPE_ID", editId);
        setIngredientGroups(ingInfo);
        const { data: cont } = await supabase
          .from("recipe_flow")
          .select("RECIPE_STEP, RECIPE_CONT")
          .eq("RECIPE_ID", editId);
        setRecipeContGroups(cont);
      };
      getData();
    }, [path]);
  }

  // 재료 그룹 추가하는 onClick 함수
  const handleAddIngGroup = () => {
    setIngredientGroups([...ingredientGroups, { ING_NAME: "", ING_VOL: "" }]);
  };

  // 재료 그룹 삭제하는 onClick 함수
  const handleRemoveIngGroup = (index) => {
    if (ingredientGroups.length === 2) {
      alert("최소 두 개의 재료는 추가되어야 합니다.");
      return;
    }
    const newGroups = ingredientGroups.filter((_, idx) => idx !== index);
    setIngredientGroups(newGroups);
  };

  // 레시피 순서 추가하는 onClick 함수
  const handleAddRecipeGroup = () => {
    setRecipeContGroups([...recipeContGroups, { RECIPE_STEP: "0", RECIPE_CONT: "" }]);
  };

  // 재료 그룹 삭제하는 onClick 함수
  const handleRemoveRecipeGroup = (index) => {
    if (recipeContGroups.length === 1) {
      alert("최소 한 개의 레시피는 작성되어야 합니다.");
      return;
    }
    const newGroups = recipeContGroups.filter((_, idx) => idx !== index);
    setRecipeContGroups(newGroups);
  };

  // 입력창에서 받아온 info value 저장하는 onChange 함수
  const recipeInfoChange = (value, type) => {
    setRecipeInfo({
      ...recipeInfo,
      [type]: value
    });
  };

  // 카테고리도!!
  const ctgChange = (value) => {
    setRecipeInfo({
      ...recipeInfo,
      RECIPE_CTG: value
    });
  };

  // 입력창에서 받아온 ing value 저장하는 onChange 함수
  const ingInfoChange = (value, type, index) => {
    const newIngGroups = [...ingredientGroups];
    newIngGroups[index] = { ...newIngGroups[index], [type]: value };
    setIngredientGroups(newIngGroups);
  };

  // 입력창에서 받아온 recipe cont 저장하는 onChange 함수
  const recipeContChange = (value, _, index) => {
    const newContGroups = [...recipeContGroups];
    newContGroups[index] = { ...newContGroups[index], RECIPE_CONT: value };
    setRecipeContGroups(newContGroups);
  };

  // 저장버튼 누르면 다 보내버리기
  const saveRecipe = async () => {
    // 정보 비었는지 검사
    const validateInfoInput = (obj) => {
      const isTrue = Object.values(obj).some((value) => !value);
      return isTrue;
    };

    // 재료 비었는지 검사
    const validateIngInput = (arr) => {
      return arr.some((value) => value.ING_NAME.length === 0 || value.ING_VOL.length === 0);
    };

    // 순서 비었는지 검사
    const validateContInput = (arr) => {
      return arr.some((value) => value.RECIPE_STEP.length === 0 || value.RECIPE_CONT.length === 0);
    };

    if (validateInfoInput(recipeInfo) || validateIngInput(ingredientGroups) || validateContInput(recipeContGroups)) {
      Swal.fire({
        title: "빈칸 발견!",
        html: "입력 되지 않은 정보가 있습니다.<br/> 모든 칸을 채워 레시피를 완성해주세요 :)",
        icon: "error",
        customClass: {
          popup: "no-global-styles"
        }
      });
      return;
    }

    if (path === "edit") {
      const updateRecipeCont = recipeContGroups.map((cont, index) => ({
        ...cont,
        RECIPE_STEP: index + 1,
        RECIPE_ID: editId
      }));

      const updateIng = ingredientGroups.map((ing) => ({
        ...ing,
        RECIPE_ID: editId
      }));

      await supabase.from("recipe_info").upsert([recipeInfo]).eq("RECIPE_ID", editId);
      await supabase.from("recipe_ingredient").delete().eq("RECIPE_ID", editId);
      await supabase.from("recipe_ingredient").insert(updateIng);
      await supabase.from("recipe_flow").delete().eq("RECIPE_ID", editId);
      await supabase.from("recipe_flow").insert(updateRecipeCont);
      navigate(`/detail/${editId}`);

      return;
    }

    try {
      // 사용자 id 가져오기
      const user = await supabase.auth.getUser();
      const id = user.data.user.id;

      // recipe_info 테이블에 레시피 정보 삽입
      const { data } = await supabase
        .from("recipe_info")
        .insert([{ ...recipeInfo, USER_ID: id }])
        .select();

      const recipeId = data[0].RECIPE_ID;

      // ingInfo 배열 안에서 모든 재료 객체 RECIPE_ID 변경
      const updatedIngInfo = ingredientGroups.map((ingredient) => ({
        ...ingredient,
        RECIPE_ID: recipeId
      }));

      const updateRecipeCont = recipeContGroups.map((cont, index) => ({
        ...cont,
        RECIPE_ID: recipeId,
        RECIPE_STEP: index + 1
      }));

      // recipe_ingredient 테이블에 재료 정보 삽입
      await supabase.from("recipe_ingredient").insert(updatedIngInfo);
      await supabase.from("recipe_flow").insert(updateRecipeCont);

      // 상태 초기화
      setRecipeInfo(initRecipeInfo);
      setIngredientGroups(initIngInfo);
      setRecipeContGroups(initRecipeCont);

      console.log("저장 성공!");

      navigate(`/detail/${recipeId}`);
    } catch (err) {
      console.error("저장 중 오류 발생:", err.message);
    }
  };

  return (
    <WriteContext.Provider
      value={{
        handleAddIngGroup,
        handleRemoveIngGroup,
        ingredientGroups,
        handleAddRecipeGroup,
        handleRemoveRecipeGroup,
        recipeContGroups,
        handleUploadButtonClick,
        handleImageUpload,
        imageSrc,
        fileInputRef,
        recipeInfoChange,
        ctgChange,
        saveRecipe,
        ingInfoChange,
        recipeContChange,
        recipeInfo
      }}
    >
      {children}
    </WriteContext.Provider>
  );
};
