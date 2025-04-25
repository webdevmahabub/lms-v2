export const replaceMongoIdInArray = (array) => {
  if (!array || !Array.isArray(array)) return [];
  
  const mappedArray = array.map(item => {
    if (!item || !item._id) return item;
    
    const { _id, ...rest } = item;
    return {
      id: _id.toString(),
      ...rest
    };
  });

  return mappedArray;
};

  export const replaceMongoIdInObject = (obj) => {
    if(!obj) return null;
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
   return updatedObj;
  }

  export const getSlug = (title) => {
    if (!title) return null;
  
    // Fix: Change .replace(/ /g, -'') to .replace(/ /g, '-')
    const slug = title.toLowerCase().replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  
    return slug;
  };