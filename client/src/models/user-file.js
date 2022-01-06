import {File} from "./file.js";

export class UserFile {

    constructor(data) {
        this.fillData(data);
    }

    fillData(data) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.file = data.file;
        this.delete_date = data.delete_date;
        this.comment = data.comment;
    }

    static empty(data = {}) {
        return new UserFile({
            id: data.id || 0,
            user_id: data.user_id || 0,
            file: data.file instanceof File ? data.file : File.empty(),
            comment: data.comment || '',
            delete_date: null,
        });
    }
}