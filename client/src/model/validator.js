export const validateName = (input_str) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/;
  return re.test(input_str)
};


export const isValidIsraeliID = (idNumber, allData) => {
  const ifExsist = Object.values(allData)
  .flatMap(innerObj => Object.values(innerObj))
  .filter(val => String(val) === String(idNumber));
  if (ifExsist.length !== 0){
    return `${idNumber} already exists`
  }

  let id = String(idNumber).trim();
  if (id.length > 9 || id.length < 5 || isNaN(id)) return false;

  // Pad string with zeros up to 9 digits
  id = id.length < 9 ? ("00000000" + id).slice(-9) : id;

  return (
    Array.from(id, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) %
      10 ===
    0
  );
};


export const validateIPAddress = (ip) => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}$/;
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
};


export const validatePhoneNumber = (phoneNumber) => {
  const re = /^(?:\+972|972|0)(?:-)?(?:[23489]|5[023458]|77|81)(?:-)?(?:\d{7})$/;
  return re.test(phoneNumber);
};

