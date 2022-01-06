import {serverApi} from "../../api/server/server-api.js";

export const useUserFile = () => {

    const getUserFiles = async (user) => {

    }

    const createUserFile = async (userFile) => {
        console.log(userFile.delete_date);

        const {data} = await serverApi.createUserFile(userFile.file.file, {
            name: userFile.file.name,
            delete_date: userFile.delete_date,
            comment: userFile.comment
        })

        return data.success;
    }


    return {
        createUserFile
    }
}