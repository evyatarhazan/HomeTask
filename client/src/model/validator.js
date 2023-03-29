export const validateName = (input_str) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/;
  return re.test(input_str) ? true : `${input_str} is invalid Name`;
};


export const isValidIsraeliID = (idNumber) => {
  let id = String(idNumber).trim();
  if (id.length > 9 || id.length < 5 || isNaN(id)) return `${idNumber} is invalid id`;

  // Pad string with zeros up to 9 digits
  id = id.length < 9 ? ("00000000" + id).slice(-9) : id;

  return (
    Array.from(id, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) %
      10 ===
    0
  ) ? true : `${idNumber} is invalid id`;
};


export const validateIPAddress = (ip) => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}$/;
  return ipv4Regex.test(ip) || ipv6Regex.test(ip) ? true : `${ip} is invalid ip`;
};


export const validatePhoneNumber = (phoneNumber) => {
  const re = /^(?:\+972|972|0)(?:-)?(?:[23489]|5[023458]|77|81)(?:-)?(?:\d{7})$/;
  return re.test(phoneNumber) ? true : `${phoneNumber} is invalid phone number`;
};

