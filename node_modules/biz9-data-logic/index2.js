/*
Copyright 2023 Certified CoderZ
Author: certifiedcoderz@gmail.com (Certified CoderZ)
License GNU General Public License v3.0
Description: BiZ9 Framework: Logic-JS
*/
const {Str,Num,Obj,Log} = require('biz9-utility');
class Type {
    //field
    /*
    static FIELD_CATEGORY = 'category';
    static FIELD_CATEGORY_TYPE = 'category_type';
    static FIELD_IMAGE_FILENAME = 'image_filename';
    static FIELD_ITEMS_FIELD = 'items_field';
    static FIELD_ITEMS_TITLE = 'items_title';
    static FIELD_ITEMS_VALUE = 'items_value';
    static FIELD_IMAGES = 'images';
    static FIELD_ITEMS = 'items';
    static FIELD_VALUE = 'value';
   static FIELD_DESCRIPTION = 'description';
   static FIELD_NOTE = 'note';
    static FIELD_PARAM = 'param';
   static FIELD_PARENT_ID='parent_id';
    static FIELD='field';
    static FIELD_TEMP_ID='temp_id';
    static FIELD_TYPE = 'type';
    static FIELD_URL = 'url';
    */

    /*
        //field
    static FIELD_USER = 'user';
    static FIELD_USER_CITY = 'city';
    static FIELD_USER_COUNTRY = 'country';
    static FIELD_USER_EMAIL = 'email';
    static FIELD_USER_FIRST_NAME = 'first_name';
    static FIELD_USER_GENDER = 'gender';
    static FIELD_USER_ID='user_id';
    static FIELD_USER_LAST_NAME = 'last_name';
    static FIELD_USER_USERNAME = 'username';
    static FIELD_USER_PASSWORD = 'password';
    static FIELD_USER_ROLE = 'role';
    static FIELD_USER_STATE = 'state';
    static FIELD_WEBSITE = 'website';
    static FIELD_RESULT_OK_EMAIL = 'email_resultOK';
    static FIELD_RESULT_OK_USER_NAME = 'user_name_resultOK';
    static FIELD_RESULT_OK_USER = 'user_resultOK';
    static FIELD_RESULT_OK_UNIQUE = 'unique_resultOK';
    static FIELD_RESULT_OK_FAVORITE_ADD = 'favorite_resultOK';
    //title
    //
    //
    static TITLE_USER='User';
    static TITLE_STAT_ITEMS='Stat Items';
    static TITLE_STAT_SUB_ITEMS='Stat Sub Items';
    static TITLE_USER_ROLE_SUPER_ADMIN='Super Admin';
    static TITLE_USER_ROLE_ADMIN='Admin';
    static TITLE_USER_ROLE_MANAGER='Manager';
    static TITLE_USER_ROLE_USER='User';
    static TITLE_USER_ROLE_GUEST='Guest';
    //stat
    static STAT_CART='cart_post';
    static STAT_CART_ITEM='cart_item_post';
    static STAT_CART_SUB_ITEM='cart_sub_item_post';
    static STAT_FAVORITE='favorite_post';
    static STAT_LIKE='like_post';
    static STAT_LOGIN='login_post';
    static STAT_ORDER='order_post';
    static STAT_ORDER_ITEM='order_item_post';
    static STAT_ORDER_SUB_ITEM='order_sub_item_post';
    static STAT_ORDER_PAYMENT='order_payment_post';
    static STAT_REGISTER='register_post';
    static STAT_VIEW='view_post';
    static STAT_REVIEW='review_post';
    //user_role
    static USER_ROLE_SUPER_ADMIN='super_admin';
    static USER_ROLE_ADMIN='admin';
    static USER_ROLE_MANAGER='manager';
    static USER_ROLE_USER='user';
    static USER_ROLE_GUEST='guest';
    */
}

class Stat_Logic_old {
    static get = (parent_data_type,parent_id,type,user_id,post_data) => {
        let new_stat = Data_Logic.get_new(Type.DATA_STAT,0);
        if(!Obj.check_is_empty(post_data)){
            new_stat = Obj.merge(new_stat,Stat_Logic.filter_stat(post_data));
        }
        new_stat[Type.FIELD_PARENT_DATA_TYPE] = parent_data_type;
        new_stat[Type.FIELD_PARENT_ID] = parent_id;
        new_stat[Type.FIELD_STAT_TYPE] = type;
        new_stat[Type.FIELD_USER_ID] = user_id;
        return new_stat;
    };
    static get_stat_types = () =>{
        return [
            {title:Data_Logic.get_data_type_by_type(Type.STAT_CART),type:Type.STAT_CART,label:Type.get_data_type_by_type(Type.STAT_CART),value:Type.STAT_CART},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_CART_ITEM),type:Type.STAT_CART_ITEM,label:Type.get_data_type_by_type(Type.STAT_CART_ITEM),value:Type.STAT_CART_ITEM},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_CART_SUB_ITEM),type:Type.STAT_CART_SUB_ITEM,label:Type.get_data_type_by_type(Type.STAT_CART_SUB_ITEM),value:Type.STAT_CART_SUB_ITEM},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_FAVORITE),type:Type.STAT_FAVORITE,label:Type.get_data_type_by_type(Type.STAT_FAVORITE),value:Type.STAT_FAVORITE},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_LIKE),type:Type.STAT_LIKE,label:Type.get_data_type_by_type(Type.STAT_LIKE),value:Type.STAT_LIKE},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_LOGIN),type:Type.STAT_LOGIN,label:Type.get_data_type_by_type(Type.STAT_LOGIN),value:Type.STAT_LOGIN},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_ORDER),type:Type.STAT_ORDER,label:Type.get_data_type_by_type(Type.STAT_ORDER),value:Type.STAT_ORDER},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_ORDER_ITEM),type:Type.STAT_ORDER_ITEM,label:Type.get_data_type_by_type(Type.STAT_ORDER_ITEM),value:Type.STAT_ORDER_ITEM},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_ORDER_SUB_ITEM),type:Type.STAT_ORDER_SUB_ITEM,label:Type.get_data_type_by_type(Type.STAT_ORDER_SUB_ITEM),value:Type.STAT_ORDER_ITEM},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_ORDER_PAYMENT),type:Type.STAT_ORDER_PAYMENT,label:Type.get_data_type_by_type(Type.STAT_ORDER_PAYMENT),value:Type.STAT_ORDER_PAYMENT},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_REGISTER),type:Type.STAT_REGISTER,label:Type.get_data_type_by_type(Type.STAT_REGISTER),value:Type.STAT_REGISTER},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_REVIEW),type:Type.STAT_REVIEW,label:Type.get_data_type_by_type(Type.STAT_REVIEW),value:Type.STAT_REVIEW},
            {title:Data_Logic.get_data_type_by_type(Type.STAT_VIEW),type:Type.STAT_VIEW,label:Type.get_data_type_by_type(Type.STAT_VIEW),value:Type.STAT_VIEW},
        ]
    };
    static filter_stat = (post_data) =>{
        let filter_stat = {};
        for(const prop in post_data) {
            const value = post_data[prop];
            if (!Array.isArray(value)
                && prop != Type.FIELD_SOURCE
                && prop != Type.FIELD_DATE_CREATE
                && prop != Type.FIELD_DATE_SAVE
                && prop != Type.FIELD_DATA_TYPE
                && prop != Type.TITLE_CART_ITEMS
                && prop != Type.TITLE_CART_SUB_ITEMS
                && prop != Type.TITLE_ORDER_ITEMS
                && prop != Type.TITLE_ORDER_SUB_ITEMS
                && prop != Type.FIELD_SOURCE
                && prop != Type.FIELD_SOURCE_ID
                && prop != Type.FIELD_ID) {
                filter_stat[prop] = post_data[prop];
            }
        }
        return filter_stat;
    }
}
class Blank_Logic {
    static get_test = (option) =>{
        let data = Data_Logic.get(Type.DATA_BLANK,0);
        data.field_1="Field 1 "+ Num.get_id();
        data.field_2="Field 2 "+ Num.get_id();
        return data;
    };
};
class Field_Logic {
    static get_base_option = (data,option) => {
        if(option.test && !option.title){
            data[Type.FIELD_TITLE] = Data_Logic.get_data_type_by_type(data.data_type) + " " +Num.get_id(999);
            data[Type.FIELD_TITLE_URL] = Str.get_title_url(data[Type.FIELD_TITLE]);
        }
        if(option.title){
            data[Type.FIELD_TITLE] = option.title;
            data[Type.FIELD_TITLE_URL] = Str.get_title_url(option.title);
        }
        if(option.parent){
            data[Type.FIELD_PARENT_DATA_TYPE] = option.parent[Type.FIELD_DATA_TYPE] ? option.parent[Type.FIELD_DATA_TYPE] : Type.DATA_BLANK;
            data[Type.FIELD_PARENT_ID] = option.parent[Type.FIELD_ID] ? option.parent[Type.FIELD_ID] : 0;
        }
        if(option.data){
            data = Obj.merge(data,option.data);
        }
        return data;
    };
    //remove old
    static get_field_value_value = (value_type,item,value_id) =>{
        if(value_type!=Type.FIELD_VALUE_ITEMS){
            return ""
        }else{
            return  [];
        }
    };
    //remove
    static get_field_value_title = (value_type,value_id,group_id,sub_field_title) =>{
        switch(value_type){
            case Type.FIELD_VALUE_TEXT:
                return 'text'+'_value_'+value_id;
                break;
            case Type.FIELD_VALUE_NOTE:
                return 'note'+'_value_'+value_id;
                break;
            case Type.FIELD_VALUE_IMAGE:
                return 'image'+'_value_'+value_id;
                break;
            case Type.FIELD_VALUE_ITEMS:
                if(!group_id){
                    return 'items'+'_value_'+value_id;
                }else{
                    return 'items'+'_value_'+value_id +'_group_' +group_id+"_"+Str.get_title_url(sub_field_title);
                }
                break;
            default:
                return 'text'+'_value_'+value_id;
        };
    }
    static get_test_cost(){
        return String(Num.get_id(999)) + "." + String(Num.get_id(99));
    }
    static get_test_note = () => {
        return "Note "+String(Num.get_id()) + " Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    }
    static get_test = (title,option) =>{
        option = !Obj.check_is_empty(option) ? option : {};
        let item = {};
        item = {
            title:title,
            setting_visible:"1",
            title_url:Str.get_title_url(title),
            description:"Description "+String(Num.get_id()),
            note:Field_Logic.get_test_note(),
            id:0,
            date_create:new moment().toISOString(),
            date_save:new moment().toISOString()
        }
        if(!Str.check_is_null(option.category_title)){
            item.category =  'Category ' + Num.get_id();
        }
        return item;
    }
}
class Favorite_Logic_Move {
    static get = (parent_data_type,parent_id,user_id) =>{
        return Data_Logic.get_new(Type.DATA_FAVORITE,0,{data:{
            parent_data_type:parent_data_type,
            parent_id:parent_id,
            user_id:user_id
        }});
    }
    static get_user_search_filter = (item_data_type,user_id) =>{
        return {
            $and: [
                { parent_data_type: { $regex:String(parent_data_type), $options: "i" } },
                { user_id: { $regex:String(user_id), $options: "i" } }
            ] };
    }
    static get_search_filter = (parent_data_type,parent_id,user_id) =>{
        return {
            $and: [
                { parent_data_type: { $regex:String(parent_data_type), $options: "i" } },
                { parent_id: { $regex:String(parent_id), $options: "i" } },
                { user_id: { $regex:String(user_id), $options: "i" } }
            ] };
    }
}
class Review_Logic_Move {
    static get = (parent_data_type,parent_id,user_id,title,comment,rating) =>{
        return Data_Logic.get_new(Type.DATA_REVIEW,0,{data:{
            parent_data_type:parent_data_type,
            parent_id:parent_id,
            user_id:user_id,
            title:title ? title : "",
            comment:comment ? comment : "",
            rating:rating ? rating : 5
        }});
    }
    static get_user_search_filter = (item_data_type,user_id) =>{
        return {
            $and: [
                { item_data_type: { $regex:String(item_data_type), $options: "i" } },
                { user_id: { $regex:String(user_id), $options: "i" } }
            ] };
    }
    static get_search_filter = (item_data_type,parent_id) =>{
        return {
            $and: [
                { item_data_type: { $regex:String(item_data_type), $options: "i" } },
                { parent_id: { $regex:String(parent_id), $options: "i" } },
            ] };
    }
    static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_REVIEW,0);
        data[Type.FIELD_USER] = User_Logic.get_test();
        data.parent_data_type = Type.DATA_BLANK;
        data.parent_id = 1;
        data.rating = Num.get_id(6);
        data.comment = "My comment "+ Field_Logic.get_test_note();
        return data;
    };
}
class Category_Logic {
    static get_category_drop_down_by_items = (items) => {
        let categorys = [];
        for(let a=0;a<items.length;a++){
            categorys.push({value:items[a].title,label:items[a].title});
        }
        return categorys;
    };
    static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_CATEGORY,0);
        data.field_1="Field 1 "+ Num.get_id();
        data.field_2="Field 2 "+ Num.get_id();
        return data;
    };
};
class Storage {
    static get = (window,key) => {
        if(!Obj.check_is_empty(window)){
            if(Str.check_is_null(window.localStorage.getItem(key))){
                return null;
            }else{
                return JSON.parse(window.localStorage.getItem(key));
            }
        }else{
            return null;
        }
    }
    static post = (window,key,obj) => {
        if(!Obj.check_is_empty(window)){
            if(window.localStorage){
                window.localStorage.setItem(key,JSON.stringify(obj));
            }
        }
    }
    static delete = (window,key) =>{
        if(!Obj.check_is_empty(window)){
            if(window.localStorage){
                window.localStorage.removeItem(key);
            }
        }
    }
    static delete_all = (window) =>{
        if(!Obj.check_is_empty(window)){
            if(window.localStorage){
                window.localStorage.clear();
            }
        }
    }
}
class User_Logic_Move {
    static get_user_roles(){
        return [
            {value:Type.USER_ROLE_ADMIN,label:Type.TITLE_USER_ROLE_ADMIN,title:Type.TITLE_USER_ROLE_ADMIN},
            {value:Type.USER_ROLE_MANAGER,label:Type.TITLE_USER_ROLE_MANAGER,title:Type.TITLE_USER_ROLE_MANAGER},
            {value:Type.USER_ROLE_USER,label:Type.TITLE_USER_ROLE_USER,title:Type.TITLE_USER_ROLE_USER},
            {value:Type.USER_ROLE_GUEST,label:Type.TITLE_USER_ROLE_GUEST,title:Type.TITLE_USER_ROLE_GUEST},
        ];
    };
    static get_user_role_by_type(type){
        let item_match =  User_Logic.get_user_roles().find(item_find => item_find.value === type);
        if(item_match){
            return item_match;
        }else{
            return {value:Type.DATA_BLANK,label:'Blank User',title:'Blank User'};
        }
    };
    static get_country_state_city(item){
        let country_state_city = "";
        if(item.country == "United States"){
            let state = "";
            if(!Str.check_is_null(item.state)){
                country_state_city = item.state;
            }
            if(!Str.check_is_null(item.city)){
                if(!Str.check_is_null(item.state)){
                    country_state_city = item.city + ", " + item.state;
                }else{
                    country_state_city = item.city;
                }
            }
        }
        else{
            if(!Str.check_is_null(item.city)){
                country_state_city = item.city + ", " + item.country;
            }else{
                country_state_city = item.country;
            }
        }
        return country_state_city;
    }
    static get_full_name(first_name,last_name){
        let str_first_name = !Str.check_is_null(first_name) ? first_name : "";
        let str_last_name = !Str.check_is_null(last_name) ? last_name : "";
        return !Str.check_is_null(String(str_first_name + " " + str_last_name)) ? String(str_first_name + " " + str_last_name).trim() : "N/A";
    }
    static get_guest(){
        return Data_Logic.get_new(Type.DATA_USER,0,{data:{guest:{is_guest:true,title_url:'guest',first_name:'Guest',last_name:'User',email:'guest@email.com',title:"Guest",country:"United States"}}});
    }
    static get_request_user(req){
        if(!req || !req.session.user){
            let user=Data_Logic.get_new(Type.DATA_USER,Num.get_id(9999999),{is_guest:true});
            req.session.user=user;
        }
        return req.session.user;
    }
    static post_request_user(req,user){
        req.session.user=user;
    }
    static delete_request_user(req){
        req.session.user=null;
        delete req.session.user;
    }
    static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_USER,0);
        data.role=Type.USER_ROLE_GUEST;
        data.title="user_name_"+ Num.get_id();
        data.title_url = Str.get_title_url(data.title);
        data.title="UserName"+ Num.get_id();
        data.first_name="First Name "+ Num.get_id();
        data.last_name="First Name "+ Num.get_id();
        data.email="email"+ Num.get_id() + "@email.com";
        data.city="City "+ Num.get_id();
        data.state= User_Logic.get_states()[Num.get_id(User_Logic.get_states().length)].label;
        data.country= User_Logic.get_countries()[Num.get_id(User_Logic.get_countries().length)].label;
        data.password="1234567";
        return data;
    };
    static get_countries = () =>{
        return [
            {label: 'United States', value: 'United States'},
            {
                value: 'Afghanistan',
                label: 'Afghanistan'
            },
            {
                value: 'Albania',
                label: 'Albania'
            },
            {
                value: 'Algeria',
                label: 'Algeria'
            },
            {
                value: 'American Samoa',
                label: 'American Samoa'
            },
            {
                value: 'Andorra',
                label: 'Andorra'
            },
            {
                value: 'Angola',
                label: 'Angola'
            },
            {
                value: 'Anguilla',
                label: 'Anguilla'
            },
            {
                value: 'Antarctica',
                label: 'Antarctica'
            },
            {
                value: 'Antigua and Barbuda',
                label: 'Antigua and Barbuda'
            },
            {
                value: 'Argentina',
                label: 'Argentina'
            },
            {
                value: 'Armenia',
                label: 'Armenia'
            },
            {
                value: 'Aruba',
                label: 'Aruba'
            },
            {
                value: 'Australia',
                label: 'Australia'
            },
            {
                value: 'Austria',
                label: 'Austria'
            },
            {
                value: 'Azerbaijan',
                label: 'Azerbaijan'
            },
            {
                value: 'Bahamas',
                label: 'Bahamas'
            },
            {
                value: 'Bahrain',
                label: 'Bahrain'
            },
            {
                value: 'Bangladesh',
                label: 'Bangladesh'
            },
            {
                value: 'Barbados',
                label: 'Barbados'
            },
            {
                value: 'Belarus',
                label: 'Belarus'
            },
            {
                value: 'Belgium',
                label: 'Belgium'
            },
            {
                value: 'Belize',
                label: 'Belize'
            },
            {
                value: 'Benin',
                label: 'Benin'
            },
            {
                value: 'Bermuda',
                label: 'Bermuda'
            },
            {
                value: 'Bhutan',
                label: 'Bhutan'
            },
            {
                value: 'Bolivia (Plurinational State of)',
                label: 'Bolivia (Plurinational State of)'
            },
            {
                value: 'Bonaire, Sint Eustatius and Saba',
                label: 'Bonaire, Sint Eustatius and Saba'
            },
            {
                value: 'Bosnia and Herzegovina',
                label: 'Bosnia and Herzegovina'
            },
            {
                value: 'Botswana',
                label: 'Botswana'
            },
            {
                value: 'Bouvet Island',
                label: 'Bouvet Island'
            },
            {
                value: 'Brazil',
                label: 'Brazil'
            },
            {
                value: 'British Indian Ocean Territory',
                label: 'British Indian Ocean Territory'
            },
            {
                value: 'Brunei Darussalam',
                label: 'Brunei Darussalam'
            },
            {
                value: 'Bulgaria',
                label: 'Bulgaria'
            },
            {
                value: 'Burkina Faso',
                label: 'Burkina Faso'
            },
            {
                value: 'Burundi',
                label: 'Burundi'
            },
            {
                value: 'Cabo Verde',
                label: 'Cabo Verde'
            },
            {
                value: 'Cambodia',
                label: 'Cambodia'
            },
            {
                value: 'Cameroon',
                label: 'Cameroon'
            },
            {
                value: 'Canada',
                label: 'Canada'
            },
            {
                value: 'Cayman Islands',
                label: 'Cayman Islands'
            },
            {
                value: 'Central African Republic',
                label: 'Central African Republic'
            },
            {
                value: 'Chad',
                label: 'Chad'
            },
            {
                value: 'Chile',
                label: 'Chile'
            },
            {
                value: 'China',
                label: 'China'
            },
            {
                value: 'Christmas Island',
                label: 'Christmas Island'
            },
            {
                value: 'Cocos (Keeling) Islands',
                label: 'Cocos (Keeling) Islands'
            },
            {
                value: 'Colombia',
                label: 'Colombia'
            },
            {
                value: 'Comoros',
                label: 'Comoros'
            },
            {
                value: 'Congo',
                label: 'Congo'
            },
            {
                value: 'Congo (Democratic Republic of the)',
                label: 'Congo (Democratic Republic of the)'
            },
            {
                value: 'Cook Islands',
                label: 'Cook Islands'
            },
            {
                value: 'Costa Rica',
                label: 'Costa Rica'
            },
            {
                value: 'Croatia',
                label: 'Croatia'
            },
            {
                value: 'Cuba',
                label: 'Cuba'
            },
            {
                value: 'Curaçao',
                label: 'Curaçao'
            },
            {
                value: 'Cyprus',
                label: 'Cyprus'
            },
            {
                value: 'Czechia',
                label: 'Czechia'
            },
            {
                value: "Côte d'Ivoire",
                label: "Côte d'Ivoire"
            },
            {
                value: 'Denmark',
                label: 'Denmark'
            },
            {
                value: 'Djibouti',
                label: 'Djibouti'
            },
            {
                value: 'Dominica',
                label: 'Dominica'
            },
            {
                value: 'Dominican Republic',
                label: 'Dominican Republic'
            },
            {
                value: 'Ecuador',
                label: 'Ecuador'
            },
            {
                value: 'Egypt',
                label: 'Egypt'
            },
            {
                value: 'El Salvador',
                label: 'El Salvador'
            },
            {
                value: 'Equatorial Guinea',
                label: 'Equatorial Guinea'
            },
            {
                value: 'Eritrea',
                label: 'Eritrea'
            },
            {
                value: 'Estonia',
                label: 'Estonia'
            },
            {
                value: 'Ethiopia',
                label: 'Ethiopia'
            },
            {
                value: 'Falkland Islands (Malvinas)',
                label: 'Falkland Islands (Malvinas)'
            },
            {
                value: 'Faroe Islands',
                label: 'Faroe Islands'
            },
            {
                value: 'Fiji',
                label: 'Fiji'
            },
            {
                value: 'Finland',
                label: 'Finland'
            },
            {
                value: 'France',
                label: 'France'
            },
            {
                value: 'French Guiana',
                label: 'French Guiana'
            },
            {
                value: 'French Polynesia',
                label: 'French Polynesia'
            },
            {
                value: 'French Southern Territories',
                label: 'French Southern Territories'
            },
            {
                value: 'Gabon',
                label: 'Gabon'
            },
            {
                value: 'Gambia',
                label: 'Gambia'
            },
            {
                value: 'Georgia',
                label: 'Georgia'
            },
            {
                value: 'Germany',
                label: 'Germany'
            },
            {
                value: 'Ghana',
                label: 'Ghana'
            },
            {
                value: 'Gibraltar',
                label: 'Gibraltar'
            },
            {
                value: 'Greece',
                label: 'Greece'
            },
            {
                value: 'Greenland',
                label: 'Greenland'
            },
            {
                value: 'Grenada',
                label: 'Grenada'
            },
            {
                value: 'Guadeloupe',
                label: 'Guadeloupe'
            },
            {
                value: 'Guam',
                label: 'Guam'
            },
            {
                value: 'Guatemala',
                label: 'Guatemala'
            },
            {
                value: 'Guernsey',
                label: 'Guernsey'
            },
            {
                value: 'Guinea',
                label: 'Guinea'
            },
            {
                value: 'Guinea-Bissau',
                label: 'Guinea-Bissau'
            },
            {
                value: 'Guyana',
                label: 'Guyana'
            },
            {
                value: 'Haiti',
                label: 'Haiti'
            },
            {
                value: 'Heard Island and McDonald Islands',
                label: 'Heard Island and McDonald Islands'
            },
            {
                value: 'Holy See',
                label: 'Holy See'
            },
            {
                value: 'Honduras',
                label: 'Honduras'
            },
            {
                value: 'Hong Kong',
                label: 'Hong Kong'
            },
            {
                value: 'Hungary',
                label: 'Hungary'
            },
            {
                value: 'Iceland',
                label: 'Iceland'
            },
            {
                value: 'India',
                label: 'India'
            },
            {
                value: 'Indonesia',
                label: 'Indonesia'
            },
            {
                value: 'Iran (Islamic Republic of)',
                label: 'Iran (Islamic Republic of)'
            },
            {
                value: 'Iraq',
                label: 'Iraq'
            },
            {
                value: 'Ireland',
                label: 'Ireland'
            },
            {
                value: 'Isle of Man',
                label: 'Isle of Man'
            },
            {
                value: 'Israel',
                label: 'Israel'
            },
            {
                value: 'Italy',
                label: 'Italy'
            },
            {
                value: 'Jamaica',
                label: 'Jamaica'
            },
            {
                value: 'Japan',
                label: 'Japan'
            },
            {
                value: 'Jersey',
                label: 'Jersey'
            },
            {
                value: 'Jordan',
                label: 'Jordan'
            },
            {
                value: 'Kazakhstan',
                label: 'Kazakhstan'
            },
            {
                value: 'Kenya',
                label: 'Kenya'
            },
            {
                value: 'Kiribati',
                label: 'Kiribati'
            },
            {
                value: "Korea (Democratic People's Republic of)",
                label: "Korea (Democratic People's Republic of)"
            },
            {
                value: 'Korea (Republic of)',
                label: 'Korea (Republic of)'
            },
            {
                value: 'Kuwait',
                label: 'Kuwait'
            },
            {
                value: 'Kyrgyzstan',
                label: 'Kyrgyzstan'
            },
            {
                value: "Lao People's Democratic Republic",
                label: "Lao People's Democratic Republic"
            },
            {
                value: 'Latvia',
                label: 'Latvia'
            },
            {
                value: 'Lebanon',
                label: 'Lebanon'
            },
            {
                value: 'Lesotho',
                label: 'Lesotho'
            },
            {
                value: 'Liberia',
                label: 'Liberia'
            },
            {
                value: 'Libya',
                label: 'Libya'
            },
            {
                value: 'Liechtenstein',
                label: 'Liechtenstein'
            },
            {
                value: 'Lithuania',
                label: 'Lithuania'
            },
            {
                value: 'Luxembourg',
                label: 'Luxembourg'
            },
            {
                value: 'Macao',
                label: 'Macao'
            },
            {
                value: 'Macedonia (the former Yugoslav Republic of)',
                label: 'Macedonia (the former Yugoslav Republic of)'
            },
            {
                value: 'Madagascar',
                label: 'Madagascar'
            },
            {
                value: 'Malawi',
                label: 'Malawi'
            },
            {
                value: 'Malaysia',
                label: 'Malaysia'
            },
            {
                value: 'Maldives',
                label: 'Maldives'
            },
            {
                value: 'Mali',
                label: 'Mali'
            },
            {
                value: 'Malta',
                label: 'Malta'
            },
            {
                value: 'Marshall Islands',
                label: 'Marshall Islands'
            },
            {
                value: 'Martinique',
                label: 'Martinique'
            },
            {
                value: 'Mauritania',
                label: 'Mauritania'
            },
            {
                value: 'Mauritius',
                label: 'Mauritius'
            },
            {
                value: 'Mayotte',
                label: 'Mayotte'
            },
            {
                value: 'Mexico',
                label: 'Mexico'
            },
            {
                value: 'Micronesia (Federated States of)',
                label: 'Micronesia (Federated States of)'
            },
            {
                value: 'Moldova (Republic of)',
                label: 'Moldova (Republic of)'
            },
            {
                value: 'Monaco',
                label: 'Monaco'
            },
            {
                value: 'Mongolia',
                label: 'Mongolia'
            },
            {
                value: 'Montenegro',
                label: 'Montenegro'
            },
            {
                value: 'Montserrat',
                label: 'Montserrat'
            },
            {
                value: 'Morocco',
                label: 'Morocco'
            },
            {
                value: 'Mozambique',
                label: 'Mozambique'
            },
            {
                value: 'Myanmar',
                label: 'Myanmar'
            },
            {
                value: 'Namibia',
                label: 'Namibia'
            },
            {
                value: 'Nauru',
                label: 'Nauru'
            },
            {
                value: 'Nepal',
                label: 'Nepal'
            },
            {
                value: 'Netherlands',
                label: 'Netherlands'
            },
            {
                value: 'New Caledonia',
                label: 'New Caledonia'
            },
            {
                value: 'New Zealand',
                label: 'New Zealand'
            },
            {
                value: 'Nicaragua',
                label: 'Nicaragua'
            },
            {
                value: 'Niger',
                label: 'Niger'
            },
            {
                value: 'Nigeria',
                label: 'Nigeria'
            },
            {
                value: 'Niue',
                label: 'Niue'
            },
            {
                value: 'Norfolk Island',
                label: 'Norfolk Island'
            },
            {
                value: 'Northern Mariana Islands',
                label: 'Northern Mariana Islands'
            },
            {
                value: 'Norway',
                label: 'Norway'
            },
            {
                value: 'Oman',
                label: 'Oman'
            },
            {
                value: 'Pakistan',
                label: 'Pakistan'
            },
            {
                value: 'Palau',
                label: 'Palau'
            },
            {
                value: 'Palestine, State of',
                label: 'Palestine, State of'
            },
            {
                value: 'Panama',
                label: 'Panama'
            },
            {
                value: 'Papua New Guinea',
                label: 'Papua New Guinea'
            },
            {
                value: 'Paraguay',
                label: 'Paraguay'
            },
            {
                value: 'Peru',
                label: 'Peru'
            },
            {
                value: 'Philippines',
                label: 'Philippines'
            },
            {
                value: 'Pitcairn',
                label: 'Pitcairn'
            },
            {
                value: 'Poland',
                label: 'Poland'
            },
            {
                value: 'Portugal',
                label: 'Portugal'
            },
            {
                value: 'Puerto Rico',
                label: 'Puerto Rico'
            },
            {
                value: 'Qatar',
                label: 'Qatar'
            },
            {
                value: 'Romania',
                label: 'Romania'
            },
            {
                value: 'Russian Federation',
                label: 'Russian Federation'
            },
            {
                value: 'Rwanda',
                label: 'Rwanda'
            },
            {
                value: 'Réunion',
                label: 'Réunion'
            },
            {
                value: 'Saint Barthélemy',
                label: 'Saint Barthélemy'
            },
            {
                value: 'Saint Helena, Ascension and Tristan da Cunha',
                label: 'Saint Helena, Ascension and Tristan da Cunha'
            },
            {
                value: 'Saint Kitts and Nevis',
                label: 'Saint Kitts and Nevis'
            },
            {
                value: 'Saint Lucia',
                label: 'Saint Lucia'
            },
            {
                value: 'Saint Martin (French part)',
                label: 'Saint Martin (French part)'
            },
            {
                value: 'Saint Pierre and Miquelon',
                label: 'Saint Pierre and Miquelon'
            },
            {
                value: 'Saint Vincent and the Grenadines',
                label: 'Saint Vincent and the Grenadines'
            },
            {
                value: 'Samoa',
                label: 'Samoa'
            },
            {
                value: 'San Marino',
                label: 'San Marino'
            },
            {
                value: 'Sao Tome and Principe',
                label: 'Sao Tome and Principe'
            },
            {
                value: 'Saudi Arabia',
                label: 'Saudi Arabia'
            },
            {
                value: 'Senegal',
                label: 'Senegal'
            },
            {
                value: 'Serbia',
                label: 'Serbia'
            },
            {
                value: 'Seychelles',
                label: 'Seychelles'
            },
            {
                value: 'Sierra Leone',
                label: 'Sierra Leone'
            },
            {
                value: 'Singapore',
                label: 'Singapore'
            },
            {
                value: 'Sint Maarten (Dutch part)',
                label: 'Sint Maarten (Dutch part)'
            },
            {
                value: 'Slovakia',
                label: 'Slovakia'
            },
            {
                value: 'Slovenia',
                label: 'Slovenia'
            },
            {
                value: 'Solomon Islands',
                label: 'Solomon Islands'
            },
            {
                value: 'Somalia',
                label: 'Somalia'
            },
            {
                value: 'South Africa',
                label: 'South Africa'
            },
            {
                value: 'South Georgia and the South Sandwich Islands',
                label: 'South Georgia and the South Sandwich Islands'
            },
            {
                value: 'South Sudan',
                label: 'South Sudan'
            },
            {
                value: 'Spain',
                label: 'Spain'
            },
            {
                value: 'Sri Lanka',
                label: 'Sri Lanka'
            },
            {
                value: 'Sudan',
                label: 'Sudan'
            },
            {
                value: 'Suriname',
                label: 'Suriname'
            },
            {
                value: 'Svalbard and Jan Mayen',
                label: 'Svalbard and Jan Mayen'
            },
            {
                value: 'Swaziland',
                label: 'Swaziland'
            },
            {
                value: 'Sweden',
                label: 'Sweden'
            },
            {
                value: 'Switzerland',
                label: 'Switzerland'
            },
            {
                value: 'Syrian Arab Republic',
                label: 'Syrian Arab Republic'
            },
            {
                value: 'Taiwan Republic of China',
                label: 'Taiwan Republic of China'
            },
            {
                value: 'Tajikistan',
                label: 'Tajikistan'
            },
            {
                value: 'Tanzania, United Republic of',
                label: 'Tanzania, United Republic of'
            },
            {
                value: 'Thailand',
                label: 'Thailand'
            },
            {
                value: 'Timor-Leste',
                label: 'Timor-Leste'
            },
            {
                value: 'Togo',
                label: 'Togo'
            },
            {
                value: 'Tokelau',
                label: 'Tokelau'
            },
            {
                value: 'Tonga',
                label: 'Tonga'
            },
            {
                value: 'Trinidad and Tobago',
                label: 'Trinidad and Tobago'
            },
            {
                value: 'Tunisia',
                label: 'Tunisia'
            },
            {
                value: 'Turkey',
                label: 'Turkey'
            },
            {
                value: 'Turkmenistan',
                label: 'Turkmenistan'
            },
            {
                value: 'Turks and Caicos Islands',
                label: 'Turks and Caicos Islands'
            },
            {
                value: 'Tuvalu',
                label: 'Tuvalu'
            },
            {
                value: 'Uganda',
                label: 'Uganda'
            },
            {
                value: 'Ukraine',
                label: 'Ukraine'
            },
            {
                value: 'United Arab Emirates',
                label: 'United Arab Emirates'
            },
            {
                value: 'United Kingdom of Great Britain and Northern Ireland',
                label: 'United Kingdom of Great Britain and Northern Ireland'
            },
            {
                value: 'United States Minor Outlying Islands',
                label: 'United States Minor Outlying Islands'
            },
            {
                value: 'United States of America',
                label: 'United States of America'
            },
            {
                value: 'Uruguay',
                label: 'Uruguay'
            },
            {
                value: 'Uzbekistan',
                label: 'Uzbekistan'
            },
            {
                value: 'Vanuatu',
                label: 'Vanuatu'
            },
            {
                value: 'Venezuela (Bolivarian Republic of)',
                label: 'Venezuela (Bolivarian Republic of)'
            },
            {
                value: 'Vietnam',
                label: 'Vietnam'
            },
            {
                value: 'Virgin Islands (British)',
                label: 'Virgin Islands (British)'
            },
            {
                value: 'Virgin Islands (U.S.)',
                label: 'Virgin Islands (U.S.)'
            },
            {
                value: 'Wallis and Futuna',
                label: 'Wallis and Futuna'
            },
            {
                value: 'Western Sahara',
                label: 'Western Sahara'
            },
            {
                value: 'Yemen',
                label: 'Yemen'
            },
            {
                value: 'Zambia',
                label: 'Zambia'
            },
            {
                value: 'Zimbabwe',
                label: 'Zimbabwe'
            },
            {
                value: 'Åland Islands',
                label: 'Åland Islands'
            }
        ];

    };
    static get_states = () =>{
        return       [
            {
                label: "Other",
                value: "Other"
            },
            { label: "Alaska", value: "Alaska" },
            { label: "Alabama", value: "Alabama" },
            { label: "Arkansas", value: "Arkansas" },
            { label: "Arizona", value: "Arizona" },
            { label: "California", value: "California" },
            { label: "Colorado", value: "Colorado" },
            { label: "Connecticut", value: "Connecticut" },
            { label: "District of Columbia", value: "District of Columbia" },
            { label: "Delaware", value: "Delaware" },
            { label: "Florida", value: "Florida" },
            { label: "Georgia", value: "Georgia" },
            { label: "Hawaii", value: "Hawaii" },
            { label: "Iowa", value: "Iowa" },
            { label: "Idaho", value: "Idaho" },
            { label: "IL", value: "Illinois" },
            { label: "Illinois", value: "Indiana" },
            { label: "Kansas", value: "Kansas" },
            { label: "Kentucky", value: "Kentucky" },
            { label: "Louisiana", value: "Louisiana" },
            { label: "Massachusetts", value: "Massachusetts" },
            { label: "Maryland", value: "Maryland" },
            { label: "Maine", value: "Maine" },
            { label: "Michigan", value: "Michigan" },
            { label: "Minnesota", value: "Minnesota" },
            { label: "Missouri", value: "Missouri" },
            { label: "Mississippi", value: "Mississippi" },
            { label: "Montana", value: "Montana" },
            { label: "North Carolina", value: "North Carolina" },
            { label: "North Dakota", value: "North Dakota" },
            { label: "Nebraska", value: "Nebraska" },
            { label: "New Hampshire", value: "New Hampshire" },
            { label: "New Jersey", value: "New Jersey" },
            { label: "New Mexico", value: "New Mexico" },
            { label: "Nevada", value: "Nevada" },
            { label: "New York", value: "NewYork" },
            { label: "Ohio", value: "Ohio" },
            { label: "Oklahoma", value: "Oklahoma" },
            { label: "Oregon", value: "Oregon" },
            { label: "Pennsylvania", value: "Pennsylvania" },
            { label: "Rhode Island", value: "Rhode Island" },
            { label: "South Carolina", value: "South Carolina" },
            { label: "South Dakota", value: "South Dakota" },
            { label: "Tennessee", value: "Tennessee" },
            { label: "Texas", value: "Texas" },
            { label: "Utah", value: "Utah" },
            { label: "Virginia", value: "Virginia" },
            { label: "Vermont", value: "Vermont" },
            { label: "Washington", value: "Washington" },
            { label: "Wisconsin", value: "Wisconsin" },
            { label: "West Virginia", value: "West Virginia" },
            { label: "Wyoming", value: "Wyoming" },
        ];
    }
}
class File_Logic_Old {
    static url = (host,file_filename,size,param) =>{
        host = host ? host : "";
        file_filename = file_filename ? file_filename : "";
        size = size ? size : "";
        param = param ? param : "";
        return host+"/"+size + "_"+file_filename+param;
    }
    static get_by_base64 = (item_file) =>{
        let item = Data_Logic.get_new(Type.DATA_FILE,0,{data:item_file});
        item.extension = !Str.check_is_null(Str.get_file_type_from_base64(item.file_data)) ? Str.get_file_type_from_base64(item.file_data).extension : 'txt';
        item.file_filename = !Str.check_is_null(Str.get_file_type_from_base64(item.file_data)) ? Str.get_guid()+ "." + item.extension : 'not_found.txt';
        item.buffer = !Str.check_is_null(Str.get_file_type_from_base64(item_file.file_data)) ? Buffer.from(item_file.file_data.split(';base64,').pop(), 'base64') : null;
        return item;
    };
};
module.exports = {
    Blank_Logic,
    Category_Logic,
    Field_Logic,
    Storage,
    Type,
};
