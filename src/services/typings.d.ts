declare namespace API {
  interface PageInfo {
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface UserInfo {
    id: number
    email: string
    passwordHash: string
    name: string | null
    avatarUrl: string | null
  }



  type requestRespon<T> = {
    code: number,
    data: T
  }
}
