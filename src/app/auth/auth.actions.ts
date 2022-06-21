export class Login {
  static type = "[Login] Login";
  constructor(
    public username: string,
    public password: string,
    public companyId: string
  ) {}
}

export class Logout {
  static type = "[Login] Logout";
}
