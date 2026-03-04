/*
Copyright 2023 Certified CoderZ
Author: certifiedcoderz@gmail.com (Certified CoderZ)
License GNU General Public License v3.0
Description: BiZ9 Framework: Logic-JS
*/
const moment = require('moment');
const {Str,Num,Obj,Log} = require('biz9-utility');
class Message {
    static SUCCESS="Success";
    static CONFIRM="Are You Sure?";
    static USER_LOGIN_SUCCESS="Login Success";
    static USER_LOGIN_BAD="Login Incorrect";
    static USER_REGISTER_SUCCESS="Register Success";
    static USER_REGISTER_BAD="Register Fail";
    static USER_EMAIL_BAD="Please Enter A Valid Email.";
    static USER_EMAIL_NEW_CONFIRM_BAD="The New and Confirm Email Dont Match.";
    static USER_PASSWORD_NEW_CONFIRM_BAD="The New and Confirm Password Dont Match.";
    static USER_PASSWORD_BAD="Please Enter A Valid Password.";
    static USER_PASSWORD_NOT_VALID="Password must be between 7 and 15 characters long, have at least one uppercase and lowercase letter, and also contain at least one digit and one special character.";
    static USER_EMAIL_NOT_UNIQUE="Email Not Availble. Please Choose Another.";
    static USER_USERNAME_BAD="Please Enter A Valid Username.";
    static USER_USERNAME_NOT_UNIQUE="Username Not Availble. Please Choose Another.";
    static ITEM_TITLE_BAD="Please Enter A Valid Title.";
    static DATA_NOT_FOUND="Data Not Found.";
    static SYSTEM_NOT_FOUND="System Not Found.";
    static FAVORITE_ADD_SUCCESS="Favorite Add Success.";
    static FAVORITE_REMOVE_SUCCESS="Favorite Remove Success.";
    static FAVORITE_USER_LOGIN="Please Login To Add Favorite.";
    static REVIEW_ADD_SUCCESS="Review Add Success.";
    static REVIEW_REMOVE_SUCCESS="Review Remove Success.";
    static REVIEW_USER_LOGIN="Please Login To Add Review.";
}
class Type {
    //app_status
    static APP_ENV_TEST='test';
    static APP_ENV_STAGE='stage';
    static APP_ENV_PROD='prod';
    static APP_LINK_TYPE_WEBSITE='website';
    static APP_LINK_TYPE_GOOGLE_PLAY='google_play';
    static APP_LINK_TYPE_APPLE_STORE='apple_store';
    static APP_LINK_TYPE_CMS='cms';
    //cart
    static CART_CODE='CA';
    //data
    static DATA_APP='app_biz';
    static DATA_BLANK='blank_biz';
    static DATA_BLOG_POST='blog_post_biz';
    static DATA_CART_ITEM="cart_item_biz";
    static DATA_CART="cart_biz";
    static DATA_CART_ITEM="cart_item_biz";
    static DATA_CART_SUB_ITEM="cart_sub_item_biz";
    static DATA_CATEGORY='category_biz';
    static DATA_CUSTOM_FIELD='custom_field_biz';
    static DATA_CONTENT='content_biz';
    static DATA_EVENT='event_biz';
    static DATA_GROUP='group_biz';
    static DATA_FAQ='faq_biz';
    static DATA_FAVORITE='favorite_biz';
    static DATA_FILE='file_biz';
    static DATA_GALLERY='gallery_biz';
    static DATA_IMAGE='image_biz';
    static DATA_LINK='link_biz';
    static DATA_ORDER="order_biz";
    static DATA_ORDER_ITEM="order_item_biz";
    static DATA_ORDER_SUB_ITEM="order_sub_item_biz";
    static DATA_ORDER_PAYMENT="order_payment_biz";
    static DATA_PRODUCT='product_biz';
    static DATA_PAGE='page_biz';
    static DATA_REVIEW='review_biz';
    static DATA_SERVICE='service_biz';
    static DATA_SUB_VALUE='sub_value_biz';
    static DATA_SECURITY='security_biz';
    static DATA_STAT='stat_biz';
    static DATA_TEMPLATE='template_biz';
    static DATA_TYPE='type_biz';
    static DATA_USER='user_biz';
    static DATA_VIDEO='video_biz';
    //field
    static FIELD_AUTHOR = 'author';
    static FIELD_CART_NUMBER = 'cart_number';
    static FIELD_CART_ID = 'cart_id';
    static FIELD_CART_ITEM_ID = 'cart_item_id';
    static FIELD_ORDER_NUMBER = 'order_number';
    static FIELD_ORDER_ID = 'order_id';
    static FIELD_ORDER_ITEM_ID = 'order_item_id';
    static FIELD_CATEGORY = 'category';
    static FIELD_CATEGORY_TYPE = 'category_type';
    static FIELD_COST = 'cost';
    static FIELD_GRAND_TOTAL = 'grand_total';
    static FIELD_DATA_TYPE='data_type';
    static FIELD_DATE_CREATE='date_create';
    static FIELD_DATE_SAVE='date_save';
    static FIELD_DATE = 'date';
    static FIELD_DESCRIPTION = 'description';
    static FIELD_EDIT_LOCATION = 'edit_location';
    static FIELD_ID='id';
    static FIELD_IMAGE_FILENAME = 'image_filename';
    static FIELD_ITEMS_FIELD = 'items_field';
    static FIELD_ITEMS_TITLE = 'items_title';
    static FIELD_ITEMS_VALUE = 'items_value';
    static FIELD_IMAGES = 'images';
    static FIELD_ITEMS = 'items';
    static FIELD_LOCATION = 'location';
    static FIELD_MESSAGE = 'message';
    static FIELD_MEETING_LINK = 'meeting_link';
    static FIELD_NOTE = 'note';
    static FIELD_OLD_COST = 'old_cost';
    static FIELD_PARAM = 'param';
    static FIELD_PARENT_DATA_TYPE='parent_data_type';
    static FIELD_PARENT_ID='parent_id';
    static FIELD_SOURCE='source';
    static FIELD_SOURCE_DATA_TYPE='source_data_type';
    static FIELD_SOURCE_KEY='source_key';
    static FIELD_SOURCE_ID='source_id';
    static FIELD_SOURCE_PARENT_ID='source_parent_id';
    static FIELD_SECTION = 'section';
    static FIELD_SETTING_VISIBLE = 'setting_visible';
    static FIELD_SETTING_DELETE_PROTECTION = 'setting_delete_protection';
    static FIELD_SETTING_SORT_TYPE = 'setting_delete_sort_type';
    static FIELD_STOCK = 'stock';
    static FIELD_STAT = 'stat';
    static FIELD_STAT_TYPE = 'stat_type';
    static FIELD_TAG = 'tag';
    static FIELD_ROW_TITLE = 'row_title';
    static FIELD_TIME = 'time';
    static FIELD_TITLE='title';
    static FIELD_TITLE_URL='title_url';
    static FIELD='field';
    static FIELD_GROUP_ID='group_id';
    static FIELD_TEMP_ID='temp_id';
    static FIELD_TYPE = 'type';
    static FIELD_URL = 'url';
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
    static FIELD_VALUE = 'value';
    static FIELD_WEBSITE = 'website';
    static FIELD_RESULT_OK = 'resultOK';
    static FIELD_RESULT_OK_DELETE = 'delete_resultOK';
    static FIELD_RESULT_OK_DELETE_CACHE = 'delete_cache_resultOK';
    static FIELD_RESULT_OK_DELETE_DATABASE = 'delete_database_resultOK';
    static FIELD_RESULT_OK_EMAIL = 'email_resultOK';
    static FIELD_RESULT_OK_USER_NAME = 'user_name_resultOK';
    static FIELD_RESULT_OK_USER = 'user_resultOK';
    static FIELD_RESULT_OK_UNIQUE = 'unique_resultOK';
    static FIELD_RESULT_OK_FAVORITE_ADD = 'favorite_resultOK';
    static FIELD_RESULT_OK_GROUP_DELETE = 'group_delete_resultOK';
    static FIELD_RESULT_OK_GROUP_IMAGE_DELETE = 'group_image_delete_resultOK';
    static FIELD_RESULT_OK_IMAGE_DELETE = 'image_delete_resultOK';
    //title
    static TITLE_DATA_BLOG_POST = 'Blog Post';
    static TITLE_DATA_CATEGORY = 'Category';
    static TITLE_DATA_CONTENT = 'Content';
    static TITLE_DATA_EVENT = 'Event';
    static TITLE_DATA_FAQ = 'Faq';
    static TITLE_DATA_GALLERY = 'Gallery';
    static TITLE_DATA_USER = 'User';
    static TITLE_DATA_PAGE = 'Page';
    static TITLE_DATA_PRODUCT = 'Product';
    static TITLE_DATA_SERVICE = 'Service';
    //
    static TITLE_APP_ENV_TEST='Test';
    static TITLE_APP_ENV_STAGE='Stage';
    static TITLE_APP_ENV_PROD='Production';
    static TITLE_APP_LINK_TYPE_WEBSITE='Website';
    static TITLE_APP_LINK_TYPE_GOOGLE_PLAY='Google Play';
    static TITLE_APP_LINK_TYPE_APPLE_STORE='Apple Store';
    static TITLE_APP_LINK_TYPE_CMS='CMS';
    //
    static TITLE_BLANK='Blank';
    static TITLE_CART_ITEMS='Cart Items';
    static TITLE_CART_SUB_ITEMS='Cart Sub Items';
    static TITLE_CART_ITEMS='Cart Items';
    static TITLE_CART_SUB_ITEMS='Cart Sub Items';
    static TITLE_IMAGES='Images';
    static TITLE_GROUP='Group';
    static TITLE_N_A='N/A';
    static TITLE_ORDER_ITEMS='Order Items';
    static TITLE_ORDER_SUB_ITEMS='order Sub Items';
    static TITLE_PARENT_ITEM='Parent Item';
    static TITLE_USER='User';
    static TITLE_STAT_ITEMS='Stat Items';
    static TITLE_STAT_SUB_ITEMS='Stat Sub Items';
    static TITLE_ORDER_STATUS_NEW="New";
    static TITLE_ORDER_STATUS_OPEN="Open";
    static TITLE_ORDER_STATUS_COMPLETE="Complete";
    static TITLE_ORDER_STATUS_RETURNED="Returned";
    static TITLE_ORDER_STATUS_ON_HOLD="On Hold";
    static TITLE_ORDER_STATUS_CANCELLED="Cancelled";
    static TITLE_USER_ROLE_SUPER_ADMIN='Super Admin';
    static TITLE_USER_ROLE_ADMIN='Admin';
    static TITLE_USER_ROLE_MANAGER='Manager';
    static TITLE_USER_ROLE_USER='User';
    static TITLE_USER_ROLE_GUEST='Guest';
    static TITLE_PAGE_ABOUT='About';
    static TITLE_PAGE_CONTACT='Contact';
    static TITLE_PAGE_HOME='Home';
    static TITLE_PAGE_FAQ='Faq';
    static TITLE_PAGE_BLOG_POST='Blog Post';
    static TITLE_PAGE_BLOG_POST_HOME='Blog Post Home';
    static TITLE_PAGE_BLOG_POST_SEARCH='Blog Post Search';
    static TITLE_PAGE_EVENT='Event';
    static TITLE_PAGE_EVENT_HOME='Event Home';
    static TITLE_PAGE_EVENT_SEARCH='Event Search';
    static TITLE_PAGE_GALLERY='Gallery';
    static TITLE_PAGE_GALLERY_HOME='Gallery Home';
    static TITLE_PAGE_GALLERY_SEARCH='Gallery Search';
    static TITLE_PAGE_LOGIN='Login';
    static TITLE_PAGE_PRODUCT='Product';
    static TITLE_PAGE_PRODUCT_HOME='Product Home';
    static TITLE_PAGE_PRODUCT_SEARCH='Product Search';
    static TITLE_PAGE_REGISTER='Register';
    static TITLE_PAGE_REVIEW_HOME='Review Home';
    static TITLE_PAGE_SERVICE='Service';
    static TITLE_PAGE_SERVICE_HOME='Service Home';
    static TITLE_PAGE_SERVICE_SEARCH='Service Search';
    //page_section
    static TITLE_PAGE_SECTION_HEADER='Header Section';
    static TITLE_PAGE_SECTION_BODY='Body Section';
    static TITLE_PAGE_SECTION_FOOTER='Footer Section';
    //template_section
    static TITLE_TEMPLATE_SECTION_HEADER='Header Section';
    static TITLE_TEMPLATE_SECTION_BODY='Body Section';
    static TITLE_TEMPLATE_SECTION_FOOTER='Footer Section';
    //source
    static TITLE_SOURCE_DATABASE='Database';
    static TITLE_SOURCE_CACHE='Cache';
    static TITLE_SOURCE_NOT_FOUND='Not-Found';
    //page
    static PAGE_ABOUT='about';
    static PAGE_CONTACT='contact';
    static PAGE_HOME='home';
    static PAGE_FAQ='faq';
    static PAGE_BLOG_POST='blog_post';
    static PAGE_BLOG_POST_HOME='blog_post_home';
    static PAGE_BLOG_POST_SEARCH='blog_post_search';
    static PAGE_EVENT='event';
    static PAGE_EVENT_HOME='event_home';
    static PAGE_EVENT_SEARCH='event_search';
    static PAGE_GALLERY='gallery';
    static PAGE_GALLERY_HOME='gallery_home';
    static PAGE_GALLERY_SEARCH='gallery_search';
    static PAGE_LOGIN='login';
    static PAGE_PRODUCT='product';
    static PAGE_PRODUCT_HOME='product_home';
    static PAGE_PRODUCT_SEARCH='product_search';
    static PAGE_REGISTER='register';
    static PAGE_REVIEW_HOME='review_home';
    static PAGE_SERVICE='service';
    static PAGE_SERVICE_HOME='service_home';
    static PAGE_SERVICE_SEARCH='service_search';
    //page_section
    static PAGE_SECTION_HEADER='page_section_header';
    static PAGE_SECTION_BODY='page_section_body';
    static PAGE_SECTION_FOOTER='page_section_footer';
    //template_section
    static TEMPLATE_SECTION_HEADER='template_section_header';
    static TEMPLATE_SECTION_BODY='template_section_body';
    static TEMPLATE_SECTION_FOOTER='template_section_footer';
    //search
    static SEARCH_ITEMS='items';
    static SEARCH_ONE='one';
    static SEARCH_COUNT='count';
    static SEARCH_SORT_BY_ASC='asc';
    static SEARCH_SORT_BY_DESC='desc';
    //sub_value
    static SUB_VALUE_TEXT = 'text';
    static SUB_VALUE_NOTE = 'note';
    static SUB_VALUE_IMAGE = 'image';
    static SUB_VALUE_ITEMS = 'items';
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
    //template
    static TEMPLATE_PRIMARY='primary';
    static TEMPLATE_HEADER='header';
    static TEMPLATE_NAVIGATION='navigation';
    static TEMPLATE_BODY='body';
    static TEMPLATE_FOOTER='footer';
    //field_value
    static FIELD_VALUE_TEXT="text";
    static FIELD_VALUE_NOTE="note";
    static FIELD_VALUE_IMAGE="image";
    static FIELD_VALUE_ITEMS="items";
    //user_role
    static USER_ROLE_SUPER_ADMIN='super_admin';
    static USER_ROLE_ADMIN='admin';
    static USER_ROLE_MANAGER='manager';
    static USER_ROLE_USER='user';
    static USER_ROLE_GUEST='guest';
    //data_source
    static DATA_SOURCE_CLIENT_CACHE="client_cache";
    static DATA_SOURCE_SERVER_CACHE="server_cache";
    static DATA_SOURCE_DATABASE="database";
    static DATA_SOURCE_CLIENT="client";
    static DATA_SOURCE_SERVER="server";
    static DATA_SOURCE_NOT_FOUND="not_found";
    //payment_method_types
    static PAYMENT_METHOD_CASH="cash";
    static PAYMENT_METHOD_CHECK="check";
    static PAYMENT_METHOD_CREDIT_CARD="credit_card";
    static PAYMENT_METHOD_BANK_TRANSFER="bank_transfer";
    //env
    static ENV_TEST="test";
    static ENV_STAGE="stage";
    static ENV_PRODUCTION="production";
    //size
    static IMAGE_SIZE_THUMB="thumb";
    static IMAGE_SIZE_MID="mid";
    static IMAGE_SIZE_LARGE="large";
    static IMAGE_SIZE_ORIGINAL="original";
    static IMAGE_SIZE_SQUARE_THUMB="squre_thumb";
    static IMAGE_SIZE_SQUARE_MID="squre_mid";
    static IMAGE_SIZE_SQUARE_LARGE="squre_large";
    //re_size
    static IMAGE_RESIZE_NORMAL="normal";
    static IMAGE_RESIZE_SQUARE="squre";
    static IMAGE_RESIZE_NONE="none";
    //
    static CART_SUB_TYPE_STANDARD = 'standard';
    static CART_SUB_TYPE_SHIPPING = 'shipping';
    static CART_SUB_TYPE_COUPON = 'coupon';
    static CART_SUB_TYPE_GIFT_CARD = 'gift_card';
    //order
    static ORDER_CODE="OC";
    static ORDER_STATUS_NEW="new";
    static ORDER_STATUS_OPEN="open";
    static ORDER_STATUS_COMPLETE="complete";
    static ORDER_STATUS_RETURNED="returned";
    static ORDER_STATUS_ON_HOLD="on_hold";
    static ORDER_STATUS_CANCELLED="cancelled";
    //app
    static APP_MOBILE="Mobile";
    static APP_WEBSITE="Website";
    static APP_LANDING="Landing";
    //social
    static SOCIAL_URL_FACEBOOK="https://facebook.com/";
    static SOCIAL_URL_TWITTER="https://twitter.com/";
    static SOCIAL_URL_INSTAGRAM="https://instagram.com/";
    static SOCIAL_URL_YOUTUBE="https://youtube.com/";
    static SOCIAL_URL_LINKEDIN="https://linkedin.com/";
    //str
    static CATEGORY='Category';
    static DESCRIPTION='Description';
    static TYPE='Type';
}
class Stat_Logic {
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
class Order_Logic {
    static get = (cart,option) => {
        option = !Obj.check_is_empty(option) ?option:{};
        let order_code = option.order_code ? option.order_code+"-" : "";
        let order = Data_Logic.get_new(Type.DATA_ORDER,0,{data:{
            order_number:order_code + Num.get_id(99999),
            user_id:cart.user_id,
            cart_number:cart.cart_number,
            grand_total:cart.grand_total,
            status:Type.ORDER_STATUS_NEW,
            order_items:[]
        }});
        for(const key in cart) {
            if(!Obj.check_is_array(cart[key]) && Obj.check_is_object(cart[key])
                && key != Type.FIELD_ID && key != Type.FIELD_DATA_TYPE
                && key != Type.FIELD_SOURCE && key != Type.FIELD_SOURCE_ID
                && key != Type.FIELD_DATE_CREATE && key != Type.FIELD_DATE_SAVE)
            {
                order[key] = cart[key];
            }
        }
        cart.cart_items.forEach(cart_item => {
            let order_item = Data_Logic.get_new(Type.DATA_ORDER_ITEM,0,{data:{
                order_number:order.order_number,
                parent_data_type:cart_item.parent_data_type,
                parent_id:cart_item.parent_id,
                user_id:order.user_id,
                quanity:cart_item.quanity?cart_item.quanity:0,
                cost:cart_item.cost?cart_item.cost:0,
                order_sub_items:[]
            }});
            for(const key in cart_item){
                if(!Obj.check_is_array(cart_item[key]) && Obj.check_is_object(cart_item[key])
                    && key != Type.FIELD_ID && key != Type.FIELD_DATA_TYPE
                    && key != Type.FIELD_SOURCE && key != Type.FIELD_SOURCE_ID
                    && key != Type.FIELD_DATE_CREATE && key != Type.FIELD_DATE_SAVE){
                    order_item[key] = cart_item[key]
                }
            }
            cart_item.cart_sub_items.forEach(cart_sub_item => {
                let order_sub_item = Data_Logic.get_new(Type.DATA_ORDER_SUB_ITEM,0,{data:{
                    type:cart_sub_item.type,
                    cart_item_id:cart_sub_item.cart_item_id,
                    quanity:cart_sub_item.quanity,
                    cost:cart_sub_item.cost
                }});
                for(const key in cart_sub_item){
                    if(!Obj.check_is_array(order_sub_item[key]) && Obj.check_is_object(order_sub_item[key])
                        && key != Type.FIELD_ID && key != Type.FIELD_DATA_TYPE
                        && key != Type.FIELD_SOURCE && key != Type.FIELD_SOURCE_ID
                        && key != Type.FIELD_DATE_CREATE && key != Type.FIELD_DATE_SAVE){
                        order_sub_item[key] = cart_sub_item[key]
                    }
                }
                order_item.order_sub_items.push(order_sub_item);
            });
            order.order_items.push(order_item);
        });
        return order;
    };
    static get_order_statuses(){
        return [
            {value:Type.ORDER_STATUS_NEW,label:Type.TITLE_ORDER_STATUS_NEW,title:Type.TITLE_ORDER_STATUS_NEW},
            {value:Type.ORDER_STATUS_OPEN,label:Type.TITLE_ORDER_STATUS_OPEN,title:Type.TITLE_ORDER_STATUS_OPEN},
            {value:Type.ORDER_STATUS_COMPLETE,label:Type.TITLE_ORDER_STATUS_COMPLETE,title:Type.TITLE_ORDER_STATUS_COMPLETE},
            {value:Type.ORDER_STATUS_RETURNED,label:Type.TITLE_ORDER_STATUS_RETURNED,title:Type.TITLE_ORDER_STATUS_RETURNED},
            {value:Type.ORDER_STATUS_ON_HOLD,label:Type.TITLE_ORDER_STATUS_ON_HOLD,title:Type.TITLE_ORDER_STATUS_ON_HOLD},
            {value:Type.ORDER_STATUS_CANCELLED,label:Type.TITLE_ORDER_STATUS_CANCELLED,title:Type.TITLE_ORDER_STATUS_CANCELLED},
        ];
    };
    static get_total = (order) => {
        let grand_total = 0;
        order.order_items.forEach(order_item => {
            order_item.sub_total = 0;
            if(!isNaN(order_item.cost)){
                order_item.sub_total = (order_item.sub_total + order_item.cost) * order_item.quanity;
                grand_total = grand_total + order_item.sub_total;
            }
            order_item.order_sub_items.forEach(order_sub_item => {
                order_sub_item.sub_total = 0;
                if(!isNaN(order_sub_item.cost)){
                    order_sub_item.sub_total = (order_sub_item.sub_total + order_sub_item.cost) * order_sub_item.quanity;
                    grand_total = grand_total + order_sub_item.sub_total;
                }
            });
        });
        order.grand_total = grand_total;
        return order;
    };

    static get_order_payment = (order_number,payment_method_type,payment_amount,option) => {
        let transaction_code = option.transaction_code ? option.transaction_code+"-" : "";
        return Data_Logic.get_new(Type.DATA_ORDER_PAYMENT,0,{data:
            {
                order_number:order_number,
                payment_method_type:payment_method_type,
                payment_amount:payment_amount,
                transaction_id:transaction_code + Num.get_id(99999)
            }});
    };
}
class Cart_Logic {
    static get = (user_id,option) => {
        option = !Obj.check_is_empty(option)  ? option : {};
        let cart_code = option.cart_code ? option.cart_code+"-" : "";
        return Data_Logic.get_new(Type.DATA_CART,0,{data:{user_id:user_id,cart_number:cart_code + Num.get_id(99999),grand_total:0,cart_items:[]}});
    };
    static get_cart_item = (parent_data_type,parent_id,quanity,cost) =>{
        return Data_Logic.get_new(Type.DATA_CART_ITEM,0,{data:{parent_data_type:parent_data_type,parent_id:parent_id,quanity:quanity?quanity:0,cost:cost?cost:0,cart_sub_items:[]}});
    };
    static get_cart_sub_item = (cart_item_id,type,quanity,cost) =>{
        return Data_Logic.get_new(Type.DATA_CART_SUB_ITEM,0,{data:{type:type,cart_item_id:cart_item_id,quanity:quanity,cost:cost}});
    };
    static get_cart_sub_items = () =>{
        return [
            {title:Str.get_title(Type.CART_SUB_TYPE_STANDARD),label:Str.get_title(Type.CART_SUB_TYPE_STANDARD),type:Type.CART_SUB_TYPE_STANDARD},
            {title:Str.get_title(Type.CART_SUB_TYPE_SHIPPING),label:Str.get_title(Type.CART_SUB_TYPE_SHIPPING),type:Type.CART_SUB_TYPE_SHIPPING},
            {title:Str.get_title(Type.CART_SUB_TYPE_COUPON),label:Str.get_title(Type.CART_SUB_TYPE_COUPON),type:Type.CART_SUB_TYPE_COUPON},
            {title:Str.get_title(Type.CART_SUB_TYPE_GIFT_CARD),label:Str.get_title(Type.CART_SUB_TYPE_GIFT_CARD),type:Type.CART_SUB_TYPE_GIFT_CARD}
        ];
    };
    static get_total = (cart) => {
        let grand_total = 0;
        cart.cart_items.forEach(cart_item => {
            cart_item.sub_total = 0;
            if(!isNaN(cart_item.cost)){
                cart_item.sub_total = (cart_item.sub_total + cart_item.cost) * cart_item.quanity;
                grand_total = grand_total + cart_item.sub_total;
            }
            cart_item.cart_sub_items.forEach(cart_sub_item => {
                cart_sub_item.sub_total = 0;
                if(!isNaN(cart_sub_item.cost)){
                    cart_sub_item.sub_total = (cart_sub_item.sub_total + cart_sub_item.cost) * cart_sub_item.quanity;
                    grand_total = grand_total + cart_sub_item.sub_total;
                }
            });
        });
        cart.grand_total = grand_total;
        return cart;
    };
}
class Product_Logic {
    static get_stocks = () => {
        const stocks=
            [
                { value: "0", label: "Out of Stock" },
                { value: "1", label: "Only 1 Left" },
                { value: "2", label: "Less Than 3 Left" },
                { value: "3", label: "Availble" }
            ];
        return stocks;
    };
    static get_stock_by_value = (stock_val) => {
        switch(stock_val)
        {
            case "0":
                return 'Out of Stock';
                break;
            case "1":
                return 'Only 1 Left';
                break;
            case "2":
                return 'Less Than 3 Left';
                break;
            case "3":
                return 'Availble';
                break;
            default:
                return 'Availble';
                break;
        }
    };
    static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_PRODUCT,0);
        data.cost = Field_Logic.get_test_cost();
        data.old_cost = Field_Logic.get_test_cost();
        data.category = "Category "+String(Num.get_id());
        data.type = "Type "+String(Num.get_id());
        data.sub_type = "Sub Type "+String(Num.get_id());
        data.stock = String(Num.get_id(3-1));
        data.tag = "Tag "+ Num.get_id() + ", Tag "+Num.get_id() + ", Tag "+ Num.get_id();
        return data;
    };
}
class Service_Logic {
    static get_stocks = () => {
        const stocks=
            [
                { value: "0", label: "No Sessions Availble" },
                { value: "1", label: "Ready For Booking" },
                { value: "2", label: "No Sessions Availble" }
            ];
        return stocks;
    };
    static get_stock_by_value = (stock_val) => {
        switch(stock_val)
        {
            case "0":
                return 'No Sessions Availble';
                break;
            case "1":
                return 'Ready For Booking';
                break;
            case "2":
                return 'No Sessions Availble';
                break;
        }
    };
    static get_test = () =>{
        let data = {};
        data.cost = Field_Logic.get_test_cost();
        data.old_cost = Field_Logic.get_test_cost();
        data.type = "Type "+String(Num.get_id());
        data.sub_type = "Sub Type "+String(Num.get_id());
        data.stock = String(Num.get_id(3-1));
        data.tag = "Tag "+ Num.get_id() + ", Tag "+Num.get_id() + ", Tag "+ Num.get_id();
        return data;
    };
}
class Content_Logic {
    static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_CONTENT,0);
        data.field_1="Field 1 "+ Num.get_id();
        data.field_2="Field 2 "+ Num.get_id();
        return data;
    };
};
class Blank_Logic {
    static get_test = (option) =>{
        let data = Data_Logic.get(Type.DATA_BLANK,0);
        data.field_1="Field 1 "+ Num.get_id();
        data.field_2="Field 2 "+ Num.get_id();
        return data;
    };
};
class Blog_Post_Logic {
    static get_test = (option) =>{
        let data = Data_Logic.get(Type.DATA_BLOG_POST,0);
        data.author="Full Name "+ Num.get_id();
        data.tag = "Tag "+ Num.get_id() + ", Tag "+Num.get_id() + ", Tag "+ Num.get_id(), " Tag "+ Num.get_id() + ", Tag "+Num.get_id() + ", Tag "+ Num.get_id();
        data.category = "Category "+String(Num.get_id());
        data.type = "Type "+String(Num.get_id());
        data.sub_type = "Sub Type "+String(Num.get_id());
        data.description = "Description "+String(Num.get_id());
        data.note = Field_Logic.get_test_note();
        return data;
    };
}
class Gallery_Logic {
    static get_test = (option) =>{

        let data = Data_Logic.get(Type.DATA_GALLERY,0);

        data.date = String(String(Num.get_id(2030)) + "-" + String(Num.get_id(13)) + "-" + String(Num.get_id(30))).trim();
        data.time = String(Num.get_id(24)) + ":" + String(Num.get_id(59));
        data.website = "Website "+String(Num.get_id());
        return data;
    };
};
class Event_Logic {
    static get_stocks = () => {
        const stocks =
            [
                { value: "0", label: "Sold Out" },
                { value: "1", label: "Less Than 25 Tickets Remaining" },
                { value: "2", label: "Tickets Are Availble" },
                { value: "3", label: "Sold Out" },
            ];
        return stocks;
    };
    static get_stock_by_value = (stock_val) => {
        switch(stock_val)
        {
            case "0":
                return 'Sold Out';
                break;
            case "1":
                return 'Less Than 25 Tickets Remaining';
                break;
            case "2":
                return 'Tickets Are Availble';
                break;
            case "3":
                return 'Sold Out';
                break;
        }
    };
    static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_EVENT,0);
        data.cost = Field_Logic.get_test_cost();
        data.old_cost = Field_Logic.get_test_cost();
        data.date = String(String(Num.get_id(2030)) + "-" + String(Num.get_id(13)) + "-" + String(Num.get_id(30))).trim();
        data.time = String(Num.get_id(24)) + ":" + String(Num.get_id(59));
        data.website = "Website "+String(Num.get_id());
        data.location = "Location "+String(Num.get_id());
        data.meeting_link = "Meeting Link "+String(Num.get_id());
        data.stock = String(Num.get_id(3-1));
        data.category ="Category " + String(Num.get_id());
        data.tag = "Tag "+ Num.get_id() + ", Tag "+Num.get_id() + ", Tag "+ Num.get_id();
        return data;
    };
}
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
        if(option.user){
            data[Type.FIELD_USER_ID] = option.user[Type.FIELD_ID] ? option.user[Type.FIELD_ID] : 0;
        }
        if(option.data){
            data = Obj.merge(data,option.data);
        }
        return data;
    };
    static get_item_max_group_id_old = (value_id,item) => {
        let max_group_id = 0;
        let full_prop_str = "";
        for(const prop in item){
            full_prop_str = String(prop + " "+full_prop_str);
        }
        for(let b = 1; b < 75; b++){
            const exists = Str.check_if_str_exist(full_prop_str,"items_value_"+value_id+"_group_"+b);
            if(exists){
                if(b>max_group_id){
                    max_group_id = b;
                }
            }
        }
        return max_group_id;
    }
    static get_item_field_values_old = (data) => {
        let max_value_id = 1;
        let max_group_id = 1;
        let full_prop_str = "";
        for(const prop in data){
            full_prop_str = String(prop + " "+full_prop_str);
        }
        for(let a = 1; a < 75; a++){
            const exists = Str.check_if_str_exist(full_prop_str,"items_value_"+a);
            if(exists){
                if(a>max_value_id){
                    max_value_id = a;
                }
            }
            for(let b = 1; b < 20; b++){
                const exists = Str.check_if_str_exist(full_prop_str,"items_value_"+a+"_group_"+b);
                if(exists){
                    if(b>max_group_id){
                        max_group_id = b;
                    }
                }
            }
        }
        for(let a = 1; a <= max_value_id+1; a++){
            let sub_check_str = 'items_value_'+a;
            data[sub_check_str] = [];
            for(let b = 1; b < max_group_id+1; b++){
                let full_sub_check_str = sub_check_str+"_group_"+b;
                let new_item = {};
                for(const sub_prop in data){
                    if(sub_prop.startsWith(full_sub_check_str)){
                        new_item[sub_prop.replace(full_sub_check_str+"_","")] = data[sub_prop];
                    }
                }
                if(!Obj.check_is_empty(new_item)){
                    data[sub_check_str].push(new_item);
                }
            }
            if(data[sub_check_str].length<=0){
                delete data[sub_check_str];
            }
        }
        return data;
    }
    static get_item_field_value_types_old = () => {
        return [
            {value:'text',label:'Text'},
            {value:'note',label:'Note'},
            {value:'image',label:'Image'},
            {value:'items',label:'List'},
        ];
    };
    //remove
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
    static get_field_value_items_title(value_id){
        return 'items_value_'+value_id;
    }
    static get_value_items_group(item,value_id,group_id){
        let full_str = 'items_value_'+value_id+"_group_"+group_id;
        let items = [];
        let count = 0;
        for(const prop in item){
            let new_item = {};
            if(prop.startsWith(full_str)){
                count = count+1;
                new_item[prop.replace(full_str+"_","")] = item[prop];
                items.push(new_item);
            }
        }
        return items;
    }
}
class Faq_Logic {
    static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_FAQ,0);
        data.title = "Faq Title "+ Num.get_id();
        data.title_url = Str.get_title_url(data.title);
        data.question = "Question "+ Num.get_id() +" "+ Field_Logic.get_test_note();
        data.answer = "Answer "+Num.get_id() +" "+ Field_Logic.get_test_note();
        return data;
    };
}
class Favorite_Logic {
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
class Review_Logic {
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
class Template_Logic {
 static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_TEMPLATE,0);
        data.title="Title "+ Num.get_id();
        data.value="Value "+ Num.get_id();
        return data;
    };
    static get_template_section(type){
        let template_section_list = [
            {value:Type.TEMPLATE_SECTION_HEADER,title:Type.TITLE_TEMPLATE_SECTION_HEADER,label:Type.TITLE_TEMPLATE_SECTION_HEADER},
            {value:Type.TEMPLATE_SECTION_BODY,title:Type.TITLE_TEMPLATE_SECTION_BODY,label:Type.TITLE_TEMPLATE_SECTION_BODY},
            {value:Type.TEMPLATE_SECTION_FOOTER,title:Type.TITLE_TEMPLATE_SECTION_FOOTER,label:Type.TITLE_TEMPLATE_SECTION_FOOTER},
        ];
        return template_section_list.find(item_find => item_find.value === type)? template_section_list.find(item_find => item_find.value === type) : {value:Type.TEMPLATE_SECTION_BODY,title:Type.TITLE_TEMPLATE_SECTION_BODY,label:Type.TITLE_TEMPLATE_SECTION_BODY};
    };
    static get_template_sub_value_edit = (template_id,section_type) => {
        return {parent_data_type:Type.DATA_TEMPLATE,parent_id:template_id,section_type:section_type,event_handler:section_type + "_"+Type.FIELD_MESSAGE};
     };
}
class Page_Logic {
    static get_test = () =>{
        let data = Data_Logic.get(Type.DATA_PAGE,0);
        data.title="Title "+ Num.get_id();
        data.value="Value "+ Num.get_id();
        return data;
    };
    static get_page_section(type){
        let page_section_list = [
            {value:Type.PAGE_SECTION_HEADER,title:Type.TITLE_PAGE_SECTION_HEADER,label:Type.TITLE_PAGE_SECTION_HEADER},
            {value:Type.PAGE_SECTION_BODY,title:Type.TITLE_PAGE_SECTION_BODY,label:Type.TITLE_PAGE_SECTION_BODY},
            {value:Type.PAGE_SECTION_FOOTER,title:Type.TITLE_PAGE_SECTION_FOOTER,label:Type.TITLE_PAGE_SECTION_FOOTER},
        ];
        return page_section_list.find(item_find => item_find.value === type)? page_section_list.find(item_find => item_find.value === type) : {value:Type.PAGE_SECTION_BODY,title:Type.TITLE_PAGE_SECTION_BODY,label:Type.TITLE_PAGE_SECTION_BODY};
    };
    static get_page_sub_value_edit = (page_id,section_type) => {
        return {parent_data_type:Type.DATA_PAGE,parent_id:page_id,section_type:section_type,event_handler:section_type + "_"+Type.FIELD_MESSAGE};
    };
    static get_pages(){
        return [
            {value:Type.PAGE_ABOUT,title:Type.TITLE_PAGE_ABOUT,label:Type.TITLE_PAGE_ABOUT,url:Url.PAGE_ABOUT},
            {value:Type.PAGE_BLOG_POST,title:Type.TITLE_PAGE_BLOG_POST,label:Type.TITLE_PAGE_BLOG_POST,url:Url.PAGE_BLOG_POST},
            {value:Type.PAGE_BLOG_POST_HOME,title:Type.TITLE_PAGE_BLOG_POST_HOME,label:Type.TITLE_PAGE_BLOG_POST_HOME,url:Url.PAGE_BLOG_POST_HOME},
            {value:Type.PAGE_CONTACT,title:Type.TITLE_PAGE_CONTACT,label:Type.TITLE_PAGE_CONTACT,url:Url.PAGE_CONTACT},
            {value:Type.PAGE_EVENT,title:Type.TITLE_PAGE_EVENT,label:Type.TITLE_PAGE_EVENT,url:Url.PAGE_EVENT},
            {value:Type.PAGE_EVENT_HOME,title:Type.TITLE_PAGE_EVENT_HOME,label:Type.TITLE_PAGE_EVENT_HOME,url:Url.PAGE_EVENT_HOME},
            {value:Type.PAGE_FAQ,title:Type.TITLE_PAGE_FAQ,label:Type.TITLE_PAGE_FAQ,url:Url.PAGE_FAQ},
            {value:Type.PAGE_HOME,title:Type.TITLE_PAGE_HOME,label:Type.TITLE_PAGE_HOME,url:Url.PAGE_HOME},
            {value:Type.PAGE_GALLERY,title:Type.TITLE_PAGE_GALLERY,label:Type.TITLE_PAGE_GALLERY,url:Url.PAGE_GALLERY},
            {value:Type.PAGE_GALLERY_HOME,title:Type.TITLE_PAGE_GALLERY_HOME,label:Type.TITLE_PAGE_GALLERY_HOME,url:Url.PAGE_GALLERY_HOME},
            {value:Type.PAGE_LOGIN,title:Type.TITLE_PAGE_LOGIN,label:Type.TITLE_PAGE_LOGIN,url:Url.PAGE_LOGIN},
            {value:Type.PAGE_PRODUCT,title:Type.TITLE_PAGE_PRODUCT,label:Type.TITLE_PAGE_PRODUCT,url:Url.PAGE_PRODUCT},
            {value:Type.PAGE_PRODUCT_HOME,title:Type.TITLE_PAGE_PRODUCT_HOME,label:Type.TITLE_PAGE_PRODUCT_HOME,url:Url.PAGE_PRODUCT_HOME},
            {value:Type.PAGE_REGISTER,title:Type.TITLE_PAGE_REGISTER,label:Type.TITLE_PAGE_REGISTER,url:Url.REGISTER},
            {value:Type.PAGE_REVIEW_HOME,title:Type.TITLE_PAGE_REVIEW_HOME,label:Type.TITLE_PAGE_REVIEW_HOME,url:Url.PAGE_REVIEW_HOME},
            {value:Type.PAGE_SERVICE,title:Type.TITLE_PAGE_SERVICE,label:Type.TITLE_PAGE_SERVICE,url:Url.PAGE_SERVICE},
            {value:Type.PAGE_SERVICE_HOME,title:Type.TITLE_PAGE_SERVICE_HOME,label:Type.TITLE_PAGE_SERVICE_HOME,url:Url.PAGE_SERVICE_HOME},
        ];
    };
}
class User_Logic {
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
class Data_Logic {
    static get_new = (data_type,id,option) => {
        return Data_Logic.get(data_type,id,option);
    };
    static get_sub_value_items = (sub_values) => {
        let group_sub_value_list = [];
        let item_match_list = sub_values.filter(item_find => item_find[Type.FIELD_TYPE] === Type.SUB_VALUE_ITEMS);
        let update_sub_value_list = sub_values.filter(item_find => item_find[Type.FIELD_TYPE] !== Type.SUB_VALUE_ITEMS);
        let new_sub_value_full_list = [];
        let group_distinct_list = Obj.get_distinct(sub_values,Type.FIELD_GROUP_ID);
        group_distinct_list = group_distinct_list.filter(item_find => item_find[Type.FIELD_TYPE] === Type.SUB_VALUE_ITEMS);
        for(const sub_item of group_distinct_list){
            let group_sub_match = sub_values.filter(item_find => item_find[Type.FIELD_GROUP_ID] === sub_item.group_id);
            let new_sub_item = {};
                for(const sub_sub_item of group_sub_match){
                    new_sub_item[Str.get_title_url(sub_sub_item[Type.FIELD_ITEMS_FIELD])] = sub_sub_item[Type.FIELD_ITEMS_VALUE];
                    new_sub_item[[Type.FIELD_PARENT_ID]] = sub_sub_item[Type.FIELD_PARENT_ID];
                    new_sub_item[[Type.FIELD_TYPE]] = sub_sub_item[Type.FIELD_TYPE];
                    new_sub_item[[Type.FIELD_DATE_CREATE]] = sub_sub_item[Type.FIELD_DATE_CREATE];
                    new_sub_item[[Type.FIELD_GROUP_ID]] = sub_sub_item[Type.FIELD_GROUP_ID];
                    new_sub_item[[Type.FIELD_PARENT_DATA_TYPE]] = sub_sub_item[Type.FIELD_PARENT_DATA_TYPE];
                    new_sub_item[[Type.FIELD_ITEMS_TITLE]] = sub_sub_item[Type.FIELD_ITEMS_TITLE];
                    new_sub_item[[Type.FIELD_ITEMS_FIELD]] = sub_sub_item[Type.FIELD_ITEMS_FIELD];
                    new_sub_item[[Type.FIELD_ITEMS_VALUE]] = sub_sub_item[Type.FIELD_ITEMS_VALUE];
                }
                    update_sub_value_list.push(new_sub_item);
                }
        return update_sub_value_list;
    };
    static get_sub_value = (parent_data_type,parent_id,title,option) => {
        option = !Obj.check_is_empty(option)  ? option : {};
        let value = option.value ? option.value : '';
        let type = option.type ? option.type : Type.SUB_VALUE_TEXT; // SUB_VALUE_TEXT,NOTE,IMAGE,ITEMS
        let sub_value_data = {parent_data_type:parent_data_type,parent_id:parent_id,type:type};
        if(type == Type.SUB_VALUE_ITEMS){
            sub_value_data[Type.FIELD_ITEMS_TITLE] = title;
            sub_value_data[Type.FIELD_ITEMS_VALUE] = value;
        }else{
            sub_value_data[Type.FIELD_TITLE] = title;
            sub_value_data[Type.FIELD_TITLE_URL] = Str.get_title_url(title);
            sub_value_data[Type.FIELD_VALUE] = value;
        }
        return Data_Logic.get(Type.DATA_SUB_VALUE,0,{data:sub_value_data});
    };
    // --> option  = / test / blank / title / sub_value_count / count / user / parent / data
    static get = (data_type,id,option) => {
        option = !Obj.check_is_empty(option) ? option : {};
        function get_blank_field(data){
            for(const field in data){
                if(
                    field != Type.FIELD_ID &&
                    field != Type.FIELD_DATA_TYPE &&
                    field != Type.FIELD_TITLE &&
                    field != Type.FIELD_TITLE_URL
                ){
                    data[field] = '';
                }
            }
            return data;
        };
        function get_test_data(data_type){
            switch(data_type)
            {
                case Type.DATA_BLOG_POST:
                    return Blog_Post_Logic.get_test(option);
                    break;
                case Type.DATA_SERVICE:
                    return Service_Logic.get_test(option);
                    break;
                case Type.DATA_EVENT:
                    return Event_Logic.get_test(option);
                    break;
                case Type.DATA_PAGE:
                    return Page_Logic.get_test(option);
                    break;
                case Type.DATA_PRODUCT:
                    return Product_Logic.get_test(option);
                    break;
                case Type.DATA_REVIEW:
                    return Review_Logic.get_test(option);
                    break;
                case Type.DATA_IMAGE:
                    return Image_Logic.get_test(option);
                    break;
                case Type.DATA_CONTENT:
                case Type.DATA_CATEGORY:
                case Type.DATA_BLANK:
                    return Blank_Logic.get_test(option);
                    break;
                case Type.DATA_USER:
                    return User_Logic.get_test(option);
                    break;
                case Type.DATA_FAQ:
                    return Faq_Logic.get_test();
                    break;
                default:
                    return Blank_Logic.get_test(option);
                    break;
            }
        }
        let data = null;
        if(option.count>0){
            data = [];
        }else{
            data = {data_type:data_type,id:id};
        }
        option = !Obj.check_is_empty(option) ? option : {count:0};
        data = Field_Logic.get_base_option(data,option);
        if(option.test){
            data = Obj.merge(get_test_data(data_type),data);
        }
        if(option.blank){
            data = get_blank_field(data);
        }
        if(option.count>0){
            let items = [];
            for(let a = 1;a<option.count+1;a++){
                let test_data = Field_Logic.get_base_option(data,option);
                let my_title = Data_Logic.get_data_type_by_type(data_type) + " " +Num.get_id(999);

                if(option.test){
                    test_data = Obj.merge(data,get_test_data(data_type));
                }
                test_data[Type.FIELD_TITLE] = my_title;
                test_data[Type.FIELD_TITLE_URL] = Str.get_title_url(my_title);
                if(option.data){
                    test_data = Obj.merge(test_data,option.data);
                }
                if(option.title){
                    data[Type.FIELD_TITLE] = option.title;
                    data[Type.FIELD_TITLE_URL] = Str.get_title_url(option.title);
                }
                if(option.blank){
                    test_data = get_blank_field(test_data);
                }
                items.push(test_data);
            }
            data = items;
        }
        if(option.sub_value_count>0){
            if(Obj.check_is_array(data)){
                for(let a = 0;a<data.length;a++){
                    data[a].sub_values = [];
                    for(let b = 1;b<option.sub_value_count+1;b++){
                        let sub_title = 'title '+(parseInt(a)+1);
                        let sub_value = '';
                        if(!option.blank){
                            sub_value = 'value '+Num.get_id();
                        }
                        data[a].sub_values.push(Data_Logic.get_sub_value(data[a].data_type,data[a].id,sub_title,{value:sub_value}));
                    }
                }
            }else{
                data.sub_values = [];
                for(let b = 1;b<option.sub_value_count+1;b++){
                    let title = '';
                    let value = '';
                    if(!option.blank){
                        title = 'title '+Num.get_id();
                        value = 'value '+Num.get_id();
                    }
                    data.sub_values.push(Data_Logic.get_sub_value(data.data_type,data.id,title,{value:value}));
                }
            }
        }
        return data;
    };
    static get_data_type_by_type = (data_type,option) =>{
        data_type = data_type?data_type:"";
        let r_type = "";
        option = !Obj.check_is_empty(option)  ? option : {lowercase:false,plural:false,url:false};
        switch(data_type){
            case Type.DATA_APP:
            case Type.DATA_BLANK:
            case Type.DATA_BLOG_POST:
            case Type.DATA_CART:
            case Type.DATA_CART_ITEM:
            case Type.DATA_CART_SUB_ITEM:
            case Type.DATA_CATEGORY:
            case Type.DATA_CUSTOM_FIELD:
            case Type.DATA_CONTENT:
            case Type.DATA_EVENT:
            case Type.DATA_FAQ:
            case Type.DATA_FAVORITE:
            case Type.DATA_FILE:
            case Type.DATA_GALLERY:
            case Type.DATA_GROUP:
            case Type.DATA_LINK:
            case Type.DATA_ORDER:
            case Type.DATA_ORDER_ITEM:
            case Type.DATA_ORDER_SUB_ITEM:
            case Type.DATA_ORDER_PAYMENT:
            case Type.DATA_PRODUCT:
            case Type.DATA_IMAGE:
            case Type.DATA_PAGE:
            case Type.DATA_REVIEW:
            case Type.DATA_SERVICE:
            case Type.DATA_SECURITY:
            case Type.DATA_STAT:
            case Type.DATA_SUB_VALUE:
            case Type.DATA_TEMPLATE:
            case Type.DATA_TYPE:
            case Type.DATA_USER:
            case Type.DATA_VIDEO:
                r_type = String(Str.get_title(data_type.replaceAll('_',' ').replaceAll('dt','').replace('biz',''))).trim();
                break;
            default:
                r_type = 'Blank';
                break;
        };
        if(option.plural){
            r_type = r_type + 's';
        }
        if(option.lowercase){
            r_type = r_type.toLowerCase();
        }
        if(option.url){
            r_type = r_type.replace(" ","_").toLowerCase();
        }
        return r_type;
    };
    static get_data_types = () =>{
        return [
            {title:Data_Logic.get_data_type_by_type(Type.DATA_BLOG_POST),type:Type.DATA_BLOG_POST,label:Type.get_data_type_by_type(Type.DATA_BLOG_POST),value:Type.DATA_BLOG_POST},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_CATEGORY),type:Type.DATA_CATEGORY,label:Type.get_data_type_by_type(Type.DATA_CATEGORY),value:Type.DATA_CATEGORY},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_CONTENT),type:Type.DATA_CONTENT,label:Type.get_data_type_by_type(Type.DATA_CONTENT),value:Type.DATA_CONTENT},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_EVENT),type:Type.DATA_EVENT,label:Type.get_data_type_by_type(Type.DATA_EVENT),value:Type.DATA_EVENT},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_GALLERY),type:Type.DATA_GALLERY,label:Type.get_data_type_by_type(Type.DATA_GALLERY),value:Type.DATA_GALLERY},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_USER),type:Type.DATA_USER,label:Type.get_data_type_by_type(Type.DATA_USER),value:Type.DATA_USER},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_PAGE),type:Type.DATA_PAGE,label:Type.get_data_type_by_type(Type.DATA_PAGE),value:Type.DATA_PAGE},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_PRODUCT),type:Type.DATA_PRODUCT,label:Type.get_data_type_by_type(Type.DATA_PRODUCT),value:Type.DATA_PRODUCT},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_SERVICE),type:Type.DATA_SERVICE,label:Type.get_data_type_by_type(Type.DATA_SERVICE),value:Type.DATA_SERVICE},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_TYPE),type:Type.DATA_TYPE,label:Type.get_data_type_by_type(Type.DATA_TYPE),value:Type.DATA_TYPE},
            {title:Data_Logic.get_data_type_by_type(Type.DATA_SUB_VALUE),type:Type.DATA_SUB_VALUE,label:Type.get_data_type_by_type(Type.DATA_SUB_VALUE),value:Type.DATA_SUB_VALUE}
        ]
    };
    static get_search = (data_type,filter,sort_by,page_current,page_size,option) => {
        option = !Obj.check_is_empty(option)  ? option : {};
        return {data_type:data_type,filter:filter,sort_by:sort_by,page_current:page_current,page_size:page_size,option:option};
    }
    static get_search_group = (option) => {
        option = !Obj.check_is_empty(option)  ? option : {};
        let type  = option.type ? option.type : Type.SEARCH_ITEMS;
        let field = option.field ? option.field : {};
        let title = option.title ? Str.get_title_url(option.title) : {};
        let image = option.image ? option.image : false;
        let page_current = option.page_current ? option.page_current : 1;
        let page_size = option.page_size ? option.page_size : 0;
        return {type:type,field:field,title:title,image:image,page_current:page_current,page_size:page_size};
    }
    static get_search_foreign = (type,foreign_data_type,foreign_field,parent_field,option) => {
        option = !Obj.check_is_empty(option)  ? option : {};
        type = type ? type : Type.SEARCH_ITEMS;
        foreign_data_type = foreign_data_type ? foreign_data_type : Str.get_title_url(Data_Logic.get_data_type_by_type(foreign_data_type,{plural:true}));
        foreign_field = foreign_field ? foreign_field : Type.FIELD_PARENT_ID;
        parent_field = parent_field ? parent_field : parent_field;
        let field = option.field ? option.field : null;
        let title = option.title ? Str.get_title_url(option.title) : Str.get_title_url(Data_Logic.get_data_type_by_type(foreign_data_type,{plural:true}));
        let page_current = option.page_current ? option.page_current : 1;
        let page_size = option.page_size ? option.page_size : 0;
        return {type:type,foreign_data_type:foreign_data_type,foreign_field:foreign_field,parent_field:parent_field,type:type,field:field,title:title,page_current:page_current,page_size:page_size};
    }
    static get_search_join = (type,search,option) => {
        option = !Obj.check_is_empty(option)  ? option : {};
        type = type ? type : Type.SEARCH_ITEMS;
        search = search ? search : Data_Logic.get_search(Type.DATA_BLANK,{},{},1,0);
        let field = option.field ? option.field : {};
        let distinct = option.distinct ? option.distinct : null; //distinct:{field:'title',sort_by:Type.SEARCH_SORT_BY_DESC}
        let title = option.title ? Str.get_title_url(option.title) : Str.get_title_url(Data_Logic.get_data_type_by_type(search.data_type,{plural:true}));
        let foreigns = option.foreigns ? option.foreigns : [];
        let page_current = option.page_current ? option.page_current : 1;
        let page_size = option.page_size ? option.page_size : 0;
        return {type:type,search:search,field:field,title:title,distinct:distinct,foreigns:foreigns,page_current:page_current,page_size:page_size};
    }
    static copy = (data_type,item,option)=>{
        let copy_item = Data_Logic.get_new(data_type,0);
        option = !Obj.check_is_empty(option)  ? option : {};
        const keys = Object.keys(item);
        keys.forEach(key => {
            if(
                key!=Type.FIELD_ID&&
                key!=Type.FIELD_SOURCE&&
                key!=Type.FIELD_DATE_CREATE&&
                key!=Type.FIELD_DATE_SAVE&&
                key!=Type.TITLE_OBJ&&
                key!=Type.TITLE_USER&&
                key!=Type.TITLE_GROUP&&
                key!=Type.TITLE_ITEM&&
                !Obj.check_is_array(item[key])&&
                Obj.check_is_value(item[key])
            ){
                copy_item[key]=item[key];
            }
        });
        return copy_item;
    };
    static get_not_found = (data_type,id,option) =>{
        option=!Obj.check_is_empty(option)?option:{};
        if(!data_type){
            data_type = Type.DATA_BLANK;
        }
        if(!id){
            id = 0;
        }
        if(data_type != Type.DATA_USER){
            if(!id){
                id=0;
            }
            let item = Data_Logic.get(data_type,id);
            item.id = 0;
            item.id_key = id;
            item.title = "Item Not Found";
            item.title_url = Str.get_title_url(item.title);
            item.source = Type.TITLE_SOURCE_NOT_FOUND;
            return item;
        }else{
            let user = Data_Logic.get(data_type,id);
            user.id = 0;
            user.id_key = id;
            user.title = "User Not Found";
            user.first_name = "User Not Found";
            user.title_url = Str.get_title_url(user.title);
            user.source = Type.TITLE_SOURCE_NOT_FOUND;
            return user;
        }
    };
}
class App_Logic {
    static get = (title,user_id,type) =>{
        let app = Data_Logic.get_new(Type.DATA_APP,0);
        app.title = title;
        app.user_id = user_id;
        app.type = type;
        return app;
    }
    static get_url = (app_id,host,url,param) => {
        if(!param){
            param='';
        }
        var app_id_url='?app_id='+app_id;
        return host+"/"+url+app_id_url + param;
    };
    static get_app_environments = () =>{
        return [
            {label:Type.TITLE_APP_ENV_STAGE,title:Type.TITLE_APP_ENV_TEST,type:Type.APP_ENV_TEST,value:Type.APP_ENV_TEST},
            {label:Type.TITLE_APP_ENV_STAGE,title:Type.TITLE_APP_ENV_STAGE,type:Type.APP_ENV_STAGE,value:Type.APP_ENV_STAGE},
            {label:Type.TITLE_APP_ENV_PROD,title:Type.TITLE_APP_ENV_PROD,type:Type.APP_ENV_PROD,value:Type.APP_ENV_PROD},
        ]
    };
    static get_app_links = () =>{
        return [
            {title:Type.TITLE_APP_LINK_TYPE_WEBSITE,label:Type.TITLE_APP_LINK_TYPE_WEBSITE,type:Type.APP_LINK_TYPE_WEBSITE,value:Type.APP_LINK_TYPE_WEBSITE},
            {title:Type.TITLE_APP_LINK_TYPE_GOOGLE_PLAY,label:Type.TITLE_APP_LINK_TYPE_GOOGLE_PLAY,type:Type.APP_LINK_TYPE_GOOGLE_PLAY,value:Type.APP_LINK_TYPE_GOOGLE_PLAY},
            {title:Type.TITLE_APP_LINK_TYPE_APPLE_STORE,label:Type.TITLE_APP_LINK_TYPE_APPLE_STORE,type:Type.APP_LINK_TYPE_APPLE_STORE,value:Type.APP_LINK_TYPE_APPLE_STORE},
            {title:Type.TITLE_APP_LINK_TYPE_CMS,label:Type.TITLE_APP_LINK_TYPE_CMS,type:Type.APP_LINK_TYPE_CMS,value:Type.APP_LINK_TYPE_CMS},
        ]
    };
    static get_search_query(search){
        let url = "";
        if(search.data_type){
            url = url + "&data_type="+search.data_type;
        }else{
            url = url + "&data_type="+Type.DATA_BLANK;
        }
        if(search.sort_by_key){
            url = url + "&sort_by_key="+search.sort_by_key;
        }else{
            url = url + "&sort_by_key=title";
        }
        if(search.sort_by_value){
            url = url + "&sort_by_value="+search.sort_by_value;
        }else{
            url = url + "&sort_by_value=-1";
        }
        if(search.page_current){
            url = url + "&page_current="+search.page_current;
        }else{
            url = url + "&page_current=1";
        }
        if(search.page_size){
            url = url + "&page_size="+search.page_size;
        }else{
            url = url + "&page_size=9";
        }
        for(let a=1;a<19;a++){
            if(!Str.check_is_null(search['filter_key_'+String(a)])){
                url = url + "&filter_key_"+String(a)+"="+ search['filter_key_'+String(a)];
                url = url + "&filter_value_"+String(a)+"="+ search['filter_value_'+String(a)];
            }
        }
        return url;
    }
    static get_search_by_query(query){
        let filter = [];
        let sort_by = [];
        if(query['sort_by_key']){
            sort_by[query['sort_by_key']] = query['sort_by_value'];
        }
        for(let a = 0; a < 19; a++){
            if(query['filter_key_'+a]){
                filter[query['filter_key_'+a]] = query['filter_value_'+a]
            }
        }
        return Data_Logic.get_search(query.data_type,filter,sort_by,query.page_current,query.page_size);
    }
}
class File_Logic {
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
class Image_Logic {
    static get_test = (option) =>{
        let data = Data_Logic.get(Type.DATA_IMAGE,0);
        data.field_1="Field 1 "+ Num.get_id();
        data.field_2="Field 2 "+ Num.get_id();
        return data;
    };
    static url = (host,image_filename,size,param) =>{
        host = host ? host : "";
        image_filename = image_filename ? image_filename : "";
        size = size ? size : "";
        param = param ? param : "";
        return host+"/"+size + "_"+image_filename+param;
    }
    static get_by_base64 = (item_image) =>{
        let item = Data_Logic.get_new(Type.DATA_IMAGE,0,{data:item_image});
        item.extension = !Str.check_is_null(Str.get_file_type_from_base64(item.image_data)) ? Str.get_file_type_from_base64(item.image_data).extension : 'jpeg';
        item.image_filename = !Str.check_is_null(Str.get_file_type_from_base64(item.image_data)) ? Str.get_guid()+ "." + item.extension : 'not_found.jpeg';
        item.buffer = !Str.check_is_null(Str.get_file_type_from_base64(item_image.image_data)) ? Buffer.from(item_image.image_data.split(';base64,').pop(), 'base64') : null;
        return item;
    };
    static get_process_items = (upload_dir,image_filename) =>{
        upload_dir = upload_dir ? upload_dir : "";
        image_filename = image_filename ? image_filename : "";
        return [
            {
                image_filename:Type.IMAGE_SIZE_ORIGINAL+"_"+image_filename,
                path_filename:upload_dir+"/"+Type.IMAGE_SIZE_ORIGINAL+"_"+image_filename,
                size:0,
                type_resize:Type.IMAGE_RESIZE_NONE,
            },
            {
                image_filename:Type.IMAGE_SIZE_THUMB+"_"+image_filename,
                path_filename:upload_dir+"/"+Type.IMAGE_SIZE_THUMB+"_"+image_filename,
                size:250,
                type_resize:Type.IMAGE_RESIZE_NORMAL,
            },
            {
                image_filename:Type.IMAGE_SIZE_MID+"_"+image_filename,
                path_filename:upload_dir+"/"+Type.IMAGE_SIZE_MID+"_"+image_filename,
                size:720,
                type_resize:Type.IMAGE_RESIZE_NORMAL,
            },
            {
                image_filename:Type.IMAGE_SIZE_LARGE+"_"+image_filename,
                path_filename:upload_dir+"/"+Type.IMAGE_SIZE_LARGE+"_"+image_filename,
                size:1000,
                type_resize:Type.IMAGE_RESIZE_NORMAL,
            },
            {
                image_filename:Type.IMAGE_SIZE_SQUARE_THUMB+"_"+image_filename,
                path_filename:upload_dir+"/"+Type.IMAGE_SIZE_SQUARE_THUMB+"_"+image_filename,
                size:250,
                type_resize:Type.IMAGE_RESIZE_SQUARE,
            },
            {
                image_filename:Type.IMAGE_SIZE_SQUARE_MID+"_"+image_filename,
                path_filename:upload_dir+"/"+Type.IMAGE_SIZE_SQUARE_MID+"_"+image_filename,
                size:720,
                type_resize:Type.IMAGE_RESIZE_SQUARE,
            },
            {
                image_filename:Type.IMAGE_SIZE_SQUARE_LARGE+"_"+image_filename,
                path_filename:upload_dir+"/"+Type.IMAGE_SIZE_SQUARE_LARGE+"_"+image_filename,
                size:1000,
                type_resize:Type.IMAGE_RESIZE_SQUARE,
            },
        ];
    }
}
class Url {
    //cart
    static CART_DELETE="item/cart_delete";
    static CART="item/cart";
    static CART_POST="item/cart_post";
    //cms
    static CMS_DEMO_POST="cms/demo_post";
    static CMS_GET="cms/get";
    static CMS_SEARCH_ITEM_TYPE_CATEGORY="cms/search_item_type_category";
    //crud
    static COPY="main/crud/copy";
    static DELETE="main/crud/delete";
    static DELETE_CHECK_PROTECTION="main/crud/delete_item_check_protection";
    static DELETE_SEARCH="main/crud/delete_search";
    static GET="main/crud/get";
    static LOGIN="user/login";
    static LOGOUT="user/logout";
    static PARENT_TOP="main/crud/parent_top";
    static PING_GET="ping_get";
    static PING_POST="ping_post";
    static POST="main/crud/post";
    static POST_ITEMS="main/crud/post_items";
    static SEARCH="main/crud/search";
    static DATABASE_INFO="main/crud/database_info";
    //dashboard
    static DASHBOARD_USER_HOME="dashboard/user_home";
    static DASHBOARD_APP_HOME="dashboard/app_home";
    //favorite
    static FAVORITE_POST="item/favorite_post";
    //field
    static CUSTOM_FIELD="item/custom_field";
    static FIELD_VALUE_POST="item/field_value_post";
    //file
    static FILE_POST="main/file/post";
    static FILE_CDN_POST="main/file/cdn_post";
    //image
    static IMAGE_POST="main/image/post";
    static IMAGE_CDN_POST="main/image/cdn_post";
    //order
    static ORDER_DELETE="item/order_delete";
    static ORDER="item/order";
    static ORDER_POST="item/order_post";
    //page
    static PAGE_ABOUT="page/about";
    static PAGE_BLOG_POST="page/blog_post";
    static PAGE_BLOG_POST_HOME="page/blog_post_home";
    static PAGE_BLOG_POST_SEARCH="page/blog_post_search";
    static PAGE_CONTACT="page/contact";
    static PAGE_EVENT="page/event";
    static PAGE_EVENT_HOME="page/event_home";
    static PAGE_EVENT_SEARCH="page/event_search";
    static PAGE_FAQ="page/faq";
    static PAGE_GALLERY="page/gallery";
    static PAGE_GALLERY_HOME="page/gallery_home";
    static PAGE_GALLERY_SEARCH="page/gallery_search";
    static PAGE_HOME="index";
    static PAGE_LOGIN="page/login";
    static PAGE_PRODUCT="page/product";
    static PAGE_PRODUCT_HOME="page/product_home";
    static PAGE_PRODUCT_SEARCH="page/product_search";
    static PAGE_REGISTER="user/register";
    static PAGE_SERVICE="page/service";
    static PAGE_SERVICE_HOME="page/service_home";
    static PAGE_SERVICE_SEARCH="page/service_search";
    static PAGE_REVIEW_HOME="page/review_home";
    //review
    static REVIEW_POST="item/review_post";
    static REVIEW_SEARCH="item/review_search";
    //user
    static USER_LOGIN="user/login";
    static USER_LOGOUT="user/logout";
    static USER_REGISTER="user/register";
    static USER_POST="user/post";
    //stat
    static STAT_SEARCH="item/stat_search";
    //template
    static TEMPLATE="item/template";
}
module.exports = {
    App_Logic,
    Blank_Logic,
    Blog_Post_Logic,
    Cart_Logic,
    Category_Logic,
    Content_Logic,
    Data_Logic,
    Event_Logic,
    File_Logic,
    Field_Logic,
    Favorite_Logic,
    Faq_Logic,
    Gallery_Logic,
    Image_Logic,
    Message,
    Order_Logic,
    Page_Logic,
    Product_Logic,
    Review_Logic,
    Service_Logic,
    Stat_Logic,
    Storage,
    Template_Logic,
    Type,
    User_Logic,
    Url
};
