import {attr, Model} from "redux-orm";
import { CREATE_USER } from "../actions/user-actions";
import { session } from "./schema";

class User extends Model {
    static get fields() {
        return {
            id: attr()
        };
    }

    static reducer(action) {
        switch(action.type) {
            case CREATE_USER : {
                if (session.User.hasId(action.payload.id)) {
                    console.log('Updating User ' + action.payload.id);
                    session.User.create(action.payload);
                } else {
                    console.log('Creating User ' + action.payload.id);
                    session.User.create(action.payload);
                }
                break;
            }
        }
    }
}

User.modelName = "User";

export default User;