const isIsogram = (str) =>
  new Set(str.toLowerCase().split("")).size == str.length;
