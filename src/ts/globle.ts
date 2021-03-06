import {
    AjaxManager,
    DatePicker,
    Loader
} from '@cui/core';


interface QueryString {
    [key: string]: string[];
}

export class Global {
    public static currentRouteName = '';
    public static routeName = {};
    private static queryParamters: QueryString = {};

    public static getParamter(key: string): string {
        let value = Global.queryParamters[key];
        return value ? value.join(',') : undefined;
    }

    public static getParamters(key: string): string[] {
        return Global.queryParamters[key];
    }

    /**
     * 解析URL Parameters
     */
    public static parseQueryString() {
        if (window.location.search) {
            let queryParameters = {};
            let queryString = window.location.search.substring(1);
            let params = queryString.split('&');
            let values, name, value;
            for (let i in params) {
                values = params[i].split('=');
                name = decodeURIComponent(values[0]);
                value = decodeURIComponent(values[1]);
                if (queryParameters[name]) {
                    queryParameters[name].push(value);
                } else {
                    queryParameters[name] = [value];
                }
            }
            Global.queryParamters = queryParameters;
        }
    }
}
