export const scrollUp = (id) => {
  const block = document.getElementById(id);
  block.scrollTop = block.scrollHeight;
};