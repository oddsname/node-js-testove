export class FileService {

    static getExtension(file: string)
    {
        return file.split('.').pop() || '';
    }
}