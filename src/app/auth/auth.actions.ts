export class LoginCompanyId {
  static type = "[Login View] LoginCompanyId";
  constructor(
    public username: string,
    public password: string,
    public companyId: string
  ) {}
}
