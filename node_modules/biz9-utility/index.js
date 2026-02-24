/*
Copyright 2019 BiZ9 Framework
Author: biz9framework@gmail.com (BiZ9 Framework LLC)
License GNU General Public License v3.0
Description: BiZ9 Framework: Utility
*/
const dayjs = require('dayjs');
class Form{
    static set_item = (data_type,id,item_data,option) => {
        if(!data_type){
            data_type='dt_blank';
        }
        if(!id){
            id=0;
        }
        var item={};
        for (key in item_data) {
            item[key]=String(item_data[key]).trim();
        }
        item['id']=id;
        item['data_type']=data_type;
        if(!option){
            option = {};
        }
        if(option){
            for (const key in option) {
                item[key] = option[key];
            }
        }
        return item;
    };
    static set_item_list = (data_type,item_list_data) => {
        for (a=0;a<item_list_data.length;a++){
            item_list_data['data_type']=data_type;
        }
        return item_list_data;
    };
}
class Log{
    static w = (title,str) => {
        const now = new Date();
        const formattedDateTimeLocale = now.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        if(!str){
            str='null';
        }
        console.log(String(title).toUpperCase()+ '___START__________________'+formattedDateTimeLocale);
        console.log(str);
        console.log(String(title).toUpperCase()+ '___END_____________________'+formattedDateTimeLocale);
    };
    static error = (title,str) => {
        const now = new date();
        const formatteddatetimelocale = now.tolocalestring('en-us', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        if(!str){
            str='null';
        }
        if(!str){
            str=title;
            title='';
        }
        if(!str){
            str='error null';
        }
        console.error(String(title).toUpperCase()+ '___START__________________'+formattedDateTimeLocale);
        console.error(str);
        console.error(String(title).toUpperCase()+ '___END_____________________'+formattedDateTimeLocale);
    };
    static append = (message,new_message) => {
        let append = false;
        if(new_message){
            if(!message){
                message='';
                append=true;
            }
            if(append){
                new_message = ' ' + new_message + ",";
                message = message + new_message
            }
        }
        return message;
    };
}
class Num {
    static get_id = (max) => {
        if(!max){
            max = 99999;
        }
        let min = 0;
        return Math.floor(Math.random() * (max - min)) + min;
    };
    static get_decimal = (n,decimal) => {
        if(!n){
            n=0;
        }
        if(!decimal){
            decimal = 1;
        }
        return parseFloat(n).toFixed(decimal);
    };
    static get_discount = (old_cost, now_cost) => {
        if(isNaN(old_cost)){
            old_cost=parseFloat(0.00);
        }
        if(isNaN(now_cost)){
            now_cost=parseFloat(0.00);
        }
        let discount = old_cost - now_cost;
        let r_discount  = String(parseInt(((discount / old_cost) * 100))) + "%";
        if(isNaN(r_discount)){
            r_discount=parseFloat(0.00) + "%";
        }
        return r_discount;
    };
}
class Obj {
    static sort_list_by_field = (item_list, sort_field,sort_type) => {
        if(!sort_type){
            sort_type='asc'; //asc, desc
        }
        if(sort_type=='asc'){
            return item_list.sort((a, b) => a[sort_field].localeCompare(b[sort_field]));
        }else{
            return item_list.sort((a, b) => b[sort_field].localeCompare(a[sort_field]));
        }
    }
    static merge = (obj1, obj2) => {
        return {...obj1, ...obj2};
    }
    static check_is_empty = (obj) => {
        let is_null = false;
        if(!obj){
            obj = {};
        }
        let check_obj =  Object.keys(obj).length === 0 && obj.constructor === Object;
        is_null = check_obj;
        if(check_obj === null){
            is_null = true;
        }
        return is_null;
    };
    static check_has_list = (obj) =>{
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (Array.isArray(obj[key])) {
                    return true; // Found a property that is an array
                }
            }
        }
        return false; // No array property found
    };
    static check_is_array = (obj) =>{
        return Array.isArray(obj);
    }
    static check_is_object(value) {
        return value === null || (typeof value !== 'object' && typeof value !== 'function');
    }
    static check_is_value(value) {
        return value !== Object(value);
    }
    static get_distinct = (src_list, distinct_field) => {
        return src_list.filter((obj, index, self) =>
            index === self.findIndex((t) => t[distinct_field] === obj[distinct_field])
        );
    }
}
class Str {
    static get_guid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    static get_id = (max) => {
        if(!max){
            max = 99999;
        }
        let min = 0;
        return Math.floor(Math.random() * (max - min)) + min;
    };
    static check_is_guid = (str) => {
        const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        return guidRegex.test(str);
    };
    static get_cent = (n) => {
        return  parseInt((Number(number)*100)).toString();
    };
    static get_title = (str,plural) => {
        if(!str){
            str='';
        }
        if(plural){
            str = str + "s";
        }
        return str.replace(/\w\S*/g,text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
    };
    static get_lower_case = (str) => {
        if(!str){
            str = '';
        }
        return str.toLowerCase();
    };
    static check_is_null = (str) => {
        if(!str){
            return true;
        }
        else if(str == null){
            return true;
        }
        else if(typeof str === 'undefined') {
            return true;
        }
        else if(str === undefined) {
            return true;
        }
        else if(String(str) == 'undefined') {
            return true;
        }
        else if(String(str) == undefined) {
            return true;
        }
        else if(str.length === 0){
            return true;
        }
        else if(str.length==0){
            return true;
        }
        else if(str === undefined || str == 0 || str == '0'){
            return true;
        }
        else if(String(str) =='null'){
            return true;
        }else{
            return false;
        }
    };
    static check_is_true = (str) => {
        if(Str.check_is_null(str)){
            return false;
        }else{
            const lowerStr = str.toString().toLowerCase();
            return lowerStr === "true" || lowerStr === "yes" || lowerStr === "on" || lowerStr === "1";
        }
    };
    static get_title_url = (title) => {
        if(!title){
            title='';
        }
        return String(title).replace(/[^a-z0-9]+/ig, "_").toLowerCase();
    };
    static get_truncate = (str,max) => {
        if (str.length > max) {
            return str.substring(0, max) + "...";
        } else {
            return str;
        }
    };
    static validate_email = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    static validate_password = (password) => {
        const minLength = 7;
        const maxLength = 15;
        // Check length
        if (password.length < minLength || password.length > maxLength) {
            return "Password must be between " + minLength + " and " + maxLength + " characters long.";
        }
        // Check for at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        // Check for at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        // Check for at least one digit
        if (!/\d/.test(password)) {
            return "Password must contain at least one digit.";
        }
        // Check for at least one special character
        if (!/[!@#$%^&*()]/.test(password)) { // You can expand this set of special characters
            return "Password must contain at least one special character.";
        }
        return true; // All checks passed
    };
    static get_photo = (photo_data) => {
        return photo_data = photo_data ? photo_data : "no_img.jpg";
    };
    static get_capital_first_letter = (str) => {
        if(Str.check_is_null(str)){
            str = "";
        }
        const words = str.split(' ');
        const capitalizedWords = words.map(word => {
            if (word.length === 0) {
                return '';
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(' ');
    };
    static get_remove_whitespace = (str) => {
        if(Str.check_is_null(str)){
            str = "";
        }
        const words = str.split(' ');
        const capitalizedWords = words.map(word => {
            if (word.length === 0) {
                return '';
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(' ');
    };
    static check_is_base64 = (str) => {
        const base64RegExp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
        return base64RegExp.test(str);
    };
    static get_money = (n) => {
        n = parseFloat(_n);
        if(!n || isNaN(n)){
            n = 0;
        }
        return "$"+n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };
    static get_file_type_from_base64 = (base64) => {
        if(!base64Data){
            base64Data="";
        }
        const regex = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+)(;charset=[a-zA-Z0-9-]+)?(;base64)?,/;
        const matches = base64Data.match(regex);

        if (matches && matches.length >= 2) {
            const mimeType = matches[1]; // e.g., "image/png"
            const parts = mimeType.split('/');
            if (parts.length === 2) {
                const extension = parts[1]; // e.g., "png"
                return { mimeType: mimeType, extension: extension };
            }
            return { mimeType: mimeType, extension: null };
        }
        return null; // Not a valid data URL or MIME type not found
    };
    static check_if_str_exist = (src_str,val) => {
        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        const regex = new RegExp(escapeRegExp(val), 'i');
        return regex.test(src_str);
    };
    static check_is_image = (filename) =>{
        let is_true = false;
        const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg|svg+xml)$/i;
        is_true =  imageExtensions.test(filename);
        const regex = /svg\+xml/;
        if(!is_true){
            is_true = regex.test(filename);
        }
        return is_true;
    };
    static check_has_alpha(str) {
        // This regex will return true if it finds at least one alpha character
        const alphaRegex = /[a-zA-Z]/;
        return alphaRegex.test(str);
    }
}
class DateTime {
    static get = (option) => {
        option = option ? option : {};
        if(option.format){
            return dayjs().format(option.format);
        }else{
            return dayjs().toISOString();
        }
    };
    static get_date = (date_time,option) => {
        option = option ? option : {format:"dddd MMMM D, YYYY h:mm a"};
        const dateObj = dayjs(date_time);
        return dateObj.format(option.format);
    };
    static get_time = (date_time,option) => {
        option = option ? option : {format:"h:mm a"};
        return DateTime.get_date(date_time,{format:option.format});
    };
    static get_month = (date_time,option) => {
        option = option ? option : {format:"MMMM"};
        return DateTime.get_date(date_time,{format:option.format});
    };
    static get_year = (date_time,option) => {
        option = option ? option : {format:"YYYY"};
        return DateTime.get_date(date_time,{format:option.format});
    };
    static get_day = (date_time,option) => {
        option = option ? option : {format:"dddd"};
        return DateTime.get_date(date_time,{format:option.format});
    };
    static get_date_short = (date_time,option) => {
        //25 May 2025
        option = option ? option : {format:"D MMMM YYYY"};
        return DateTime.get_date(date_time,{format:option.format});
    };
    static get_obj = (date) => {
        return dayjs();
    };
}
module.exports = {
    Log,
    Num,
    Str,
    Obj,
    Form,
    DateTime,
};
