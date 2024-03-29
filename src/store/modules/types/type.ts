import type { RouteRecordRaw } from "vue-router";
//自定义小仓库state类型
export interface UserSrate{
    token:string|null;
    menuRoutes:RouteRecordRaw[];
    username:string;
    avatar:string
}