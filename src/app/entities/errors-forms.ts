export class ErrorsForms {

  messages = {
    required: "Este campo es requerido.",
    email: "Por favor, ingrese una dirección de correo electrónico válida.",
    passwordMin: "Por favor, Ingrese minimo 8 caracteres.",
    url: "Por favor ingrese un URL válida.",
    date: "Por favor ingrese una fecha valida.",
    number: "Por favor ingrese un número valido.",
    digits: "Por favor ingrese solo dígitos.",
  };

  validateErrors(error) {
    if (error) {

      if (error.required)  return this.messages.required;
      if (error.email)  return this.messages.email;
      if (error.minlength)  return this.messages.passwordMin;

    } else {
      return "";
    }
  }

}
