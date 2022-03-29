function countTrue(array) {
  // Filtrar valores verdadeiros
  const allTruesFiltered = array.filter((booleanItem) => {
    return booleanItem === true;
  });

  // Contar array filtrado
  const allTruesLength = allTruesFiltered.length;

  return allTruesLength;
}
