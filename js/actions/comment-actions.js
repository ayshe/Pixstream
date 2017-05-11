export const CREATE_COMMENT = 'CREATE_COMMENT';

export function createComment(comment) {
    return {
        type: CREATE_COMMENT,
        payload: comment
    };
}