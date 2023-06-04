export interface Root {
  permissions: Permissions;
  name: string;
  picture: Picture;
  friends: Friends;
  id: string;
}

export interface Permissions {
  data: Daum[];
}

export interface Daum {
  permission: string;
  status: string;
}

export interface Picture {
  data: Data;
}

export interface Data {
  height: number;
  is_silhouette: boolean;
  url: string;
  width: number;
}

export interface Friends {
  data: any[];
  summary: Summary;
}

export interface Summary {
  total_count: number;
}
