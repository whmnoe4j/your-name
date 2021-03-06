import { CompanyRouteName, CompanyRoute } from 'ts/ng/router/company';



export enum AppRouteName {
    Default = '',
    /**
     * 主頁
     */
    Index = 'index',
    Company = 'company',
    /**
     * 頁面不存在
     */
    NotFound = 'not-found',
}
export class AppRoute {
    public static Index = ['/index'];
    public static Company = {} as CompanyRoute;
}

/**
 * 路由絕對路徑工具
 */
export class AppRouteUtil {
    /**
     *  擴展路由路徑
     * @param path
     * @param name
     */
    public static extend(path, name): any {
        const array = path;
        const newRoutePath = {};
        for (const i in name) {
            newRoutePath[i] = [].slice.call(array);
            if (name[i]) {
                newRoutePath[i].push(name[i]);
            }
        }
        return newRoutePath;
    }
}

// 產生 Company 路由絕對路徑
AppRoute.Company = AppRouteUtil.extend(['/' + AppRouteName.Company], CompanyRouteName);
