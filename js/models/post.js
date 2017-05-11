import {attr, Model, many} from "redux-orm";
import Comment from "./comment";
import { CREATE_POST } from "../actions/post-actions";
import { session } from "./schema";

class Post extends Model {
    static get fields() {
        return {
            id: attr(),
            comments : many("Comment")
        };
    }

    static reducer(action) {
        switch(action.type) {
            case CREATE_POST : {
                if (session.Post.hasId(action.payload.id)) {
                    console.log('Updating Post ' + action.payload.id);
                    session.Post.update(action.payload);
                } else {
                    console.log('Creating Post ' + action.payload.id);
                    session.Post.create(action.payload);
                }
                break;
            }
        }
    }
}

Post.modelName = "Post";

export default Post;