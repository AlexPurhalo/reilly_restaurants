import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';

class CommentStore extends EventEmitter {

    constructor() {
        super();
        this._comments = [];

        AppDispatcher.register((payload) => {
            switch(payload.actionType) {
                case Constants.SET_COMMENTS:
                    this.setComments(payload.comment);
                    this.emitChange();
                    break;
                case Constants.ADD_COMMENT:
                    this.addComment(payload.comment);
                    this.emitChange();
                    break;
                default:
                // NO-OP
            }
        });

    }

    setComments (comments) {
        comments.forEach((comment) => {
            this.addComment(comment)
        });
    }
    
    addComment (comment) {
        // if we don't have id, we use length of array as id for every new comment
        // comment.id allow to not make copy with different id
        this._comments[comment.id || this._comments.length] = comment;
        // console.log(this._comments);
        // console.log(this._comments.length)
    }

    comments () {
        return this._comments;
    }

    addChangeListener (callback) {
        this.on(Constants.CHANGE_EVENT, callback);
    }

    removeChangeListener (callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback);
    }

    emitChange () {
        this.emit(Constants.CHANGE_EVENT);
    }
}
export default CommentStore;