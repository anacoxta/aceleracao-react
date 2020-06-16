const normalizeStr = (str) => {
  let normalized = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  const specialReg = new RegExp(
    /^\w+$/
  );
  let hasAccent = specialReg.test(str) ? 'entrada sem acento' : 'entrada com acento normalizada'
  return normalized + ', ' + hasAccent;
}

module.exports = { normalizeStr };
