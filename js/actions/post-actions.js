import { fetchPayload } from "./api";

export const CREATE_POST = 'CREATE_POST';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    };
}

export function fetchPosts(store) {
    return fetchPayload(store, 'posts');
}