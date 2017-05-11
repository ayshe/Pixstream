import {attr, Model, fk} from "redux-orm";
import { session } from "./schema";
import { CREATE_COMMENT } from "../actions/comment-actions";


class Comment extends Model {
    static get fields() {
        return {
            id: attr(),
            author : fk("User"),
            postId : fk("Post")
        };
    }

    static reducer(action) {
        switch(action.type) {
            case CREATE_COMMENT : {
                if (session.Comment.hasId(action.payload.id)) {
                    session.Post.withId(action.payload.postId).comments.remove(action.payload.id);
                    console.log('Updating Comment ' + action.payload.id);
                    session.Comment.update(action.payload);
                    session.Post.withId(action.payload.postId).comments.add(action.payload.id);
                } else {
                    console.log('Creating Comment ' + action.payload.id);
                    session.Comment.create(action.payload);
                    session.Post.withId(action.payload.postId).comments.add(action.payload.id);
                }
                break;
            }
        }
    }
}
Comment.modelName = "Comment";

export default Comment;