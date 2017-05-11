import {ORM, createReducer, createSelector} from "redux-orm";
import Comment from "./comment";
import Post from "./post";
import User from "./user";

const orm = new ORM();

orm.register(Comment, Post, User);

export const schema = createReducer(orm);

const initialState = orm.getEmptyState();
export const session = orm.session(initialState);

