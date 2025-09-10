// Função pura: calcula média das idades
export function calcularMediaIdade(usuarios) {
  if (usuarios.length === 0) return 0;
  const soma = usuarios.reduce((acc, user) => acc + user.idade, 0);
  return (soma / usuarios.length).toFixed(1);
}

// Função para validar email
export function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
