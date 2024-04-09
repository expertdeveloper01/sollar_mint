import { create } from "ipfs-http-client";

import { INFURA_API_ENDPOINT, INFURA_PROJECT_ID, INFURA_PROJECT_SECRET } from "../../utils/constants";

export class Infura {

    client = null;
    error = null;
    result = null;

    constructor({
        projectUrl = "",
        projectId = "",
        projectSecret = ""
    } = {}) {
        projectUrl = typeof projectUrl === "string" && projectUrl.trim() ? projectUrl : INFURA_API_ENDPOINT;
        projectId = typeof projectId === "string" && projectId.trim() ? projectId : INFURA_PROJECT_ID;
        projectSecret = typeof projectSecret === "string" && projectSecret.trim() ? projectSecret : INFURA_PROJECT_SECRET;

        if(!projectUrl) throw new Error('Please add INFURA_API_ENDPOINT value in .env file or in the class param!');
        if(!projectId) throw new Error('Please add INFURA_PROJECT_ID value in .env file or in the class param!');
        if(!projectSecret) throw new Error('Please add INFURA_PROJECT_SECRET value in .env file or in the class param!');

        this.initialize(projectUrl, projectId, projectSecret);
    }

    static initialize (projectUrl = "", projectId = "", projectSecret = "") {
        const url = new URL(projectUrl);
        const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
        
        const options = {
            host: url.hostname,
            port: parseInt(url.port),
            protocol: url.protocol.replace(":", ""),
            headers: {
                authorization: auth
            }
        }

        this.client = create(options);
    }

    static async upload (file) {
        this.result = null;
        this.error = null;
        try {
            // upload asset on infura ipfs server
            const result = await this.client.add(file);
            this.result = result;
            return result.path || "";
        } catch (error) {
            this.error = error;
            return "";
        }
    }
}