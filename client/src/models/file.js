export class File {

    constructor(data) {
        this.fillData(data)
    }

    fillData(data) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
        this.file = data.file
    }

    //must be js file from input "file"
    setFile(file) {
        this.file = file;
    }

    static empty(data = {}) {
        return new File({
            id: data?.id || 0,
            name: data?.name || '',
            url: data?.url || null,
            file: data?.file || null
        })
    }
}