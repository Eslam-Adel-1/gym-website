export const dataWithDuplicates = (data) => {
  let PartsArray = [];
  data?.forEach((element) => {
    if (!PartsArray.includes(element)) {
      PartsArray.push(element);
    }
  });
  return PartsArray;
};

//=======================================================

export const filteringFunction = (data, duplicatesFunction) => {
  let equipment = data?.map((item) => {
    return item.equipment;
  });
  let bodyParts = data?.map((item) => {
    return item.bodyPart;
  });
  let targetMuscles = data?.map((item) => {
    return item.target;
  });

  return {
    bodyPartsData: duplicatesFunction(bodyParts),
    equipmentData: duplicatesFunction(equipment),
    targetData: duplicatesFunction(targetMuscles),
  };
};

//=======================================================

export const searchFiltering = (data, searchInput, parameter) => {
  let searchData = [];
  if (searchInput.length !== 0) {
    searchData = data?.filter(
      (item) =>
        item.bodyPart === searchInput ||
        item.target === searchInput ||
        item.name === searchInput ||
        item.equipment === searchInput
    );
  } else if (parameter.length !== 0) {
    searchData = data?.filter(
      (item) =>
        item.bodyPart === parameter ||
        item.target === parameter ||
        item.name === parameter ||
        item.equipment === parameter
    );
  }
  return searchData;
};
