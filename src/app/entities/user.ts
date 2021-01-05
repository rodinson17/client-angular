
export class User {

  id?: number
  identification?: string;
  name?: string;
  lastName?: string;
  userName: string;
  email: string;
  password: string;
  phone?: string;
  photo?: string;

  constructor(id, identification, name, lastName, userName, email, password, phone, photo) {
    this.id = id;
    this.identification = identification;
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.photo = photo;
  }

}
