import {USERNAME, PASSWORD} from "../../authentication";
import {createUser} from "./user-actions";
import {createPost} from "./post-actions";
import {createComment} from "./comment-actions";

const HOST = 'http://sandbox:8000';
const BASE_PATH = '/api/v2';
const AUTH_PATH = 'login';

var param = function (obj) {
    return Object.keys(obj).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }).join('&');
};

export function authenticate() {
    return fetch(`${HOST}/${BASE_PATH}/${AUTH_PATH}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: param({
            email: USERNAME,
            password: PASSWORD,
        })
    });
}

export function fetchPayload(store, path) {
    return fetch(`${HOST}/${BASE_PATH}/${path}`, {
        method: 'GET',
    }).then(response => response.json())
        .then(json => {
            json.users.forEach(function (user) {
                store.dispatch(createUser(user));
            });
            json.posts.forEach(function (post) {
                store.dispatch(createPost(post));
            });
            json.comments.forEach(function (comment) {
                store.dispatch(createComment(comment));
            });
        });
}
