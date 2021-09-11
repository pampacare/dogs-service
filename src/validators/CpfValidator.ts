export const isValid = (cpf: string): any => {
  var cpfformatt = cpf.replace(/[^0-9]/g,'')

  if (cpfformatt.length === 11) {
    var cpfformatted = cpfformatt
    if (!validateCPF(cpfformatted)) { throw new Error('Cpf invalid') } else {
      return cpfformatted
    }
  } else { throw new Error('Cpf not formatted') }
}

const validateCPF = (cpf: string): boolean => {
  var sum = 0
  if (cpf === undefined || isNaN(cpf as any)) {
    return false
  }
  var strCPF = cpf.replace('.', '').replace('-', '')
  if (strCPF === '00000000000' || strCPF === '11111111111' || strCPF === '22222222222' || strCPF === '33333333333' ||
            strCPF === '44444444444' || strCPF === '55555555555' || strCPF === '66666666666' || strCPF === '77777777777' ||
            strCPF === '88888888888' || strCPF === '99999999999' || strCPF.length !== 11) {
    return false
  }
  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
  }
  var leftOver = (sum * 10) % 11
  if ((leftOver === 10) || (leftOver === 11)) {
    leftOver = 0
  }
  if (leftOver !== parseInt(strCPF.substring(9, 10))) {
    return false
  }
  sum = 0
  for (let k = 1; k <= 10; k++) {
    sum = sum + parseInt(strCPF.substring(k - 1, k)) * (12 - k)
  }
  leftOver = (sum * 10) % 11
  if ((leftOver === 10) || (leftOver === 11)) {
    leftOver = 0
  }
  if (leftOver !== parseInt(strCPF.substring(10, 11))) {
    return false
  }
  return true
}
