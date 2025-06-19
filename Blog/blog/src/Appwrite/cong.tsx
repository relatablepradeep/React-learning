import config from '../config/config.tsx'
import { Client, Databases,Storage,Query, ID } from "appwrite";


export class Service{

    client=new Client();
    databases;
    bucket;
    constructor(){

        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createpost({title,slug,content,featuredImage,status,userId}){

        try {

            return await this.databases.createDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )


            
        } catch (error) {
            throw error
            
        }


    }
    

    async updatepost({slug,title,content,featuredImage,status}){

        try {

            return await this.databases.updateDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {

            throw error
            
        }


    }



    async deletepost({slug}){
        try {

            await this.databases.deleteDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                slug
            )

            return true
            
        } catch (error) {

            throw error

            
            
        }
    }


    async getpost({slug}){
        try {

            await this.databases.getDocument(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                slug
            )

            return true
            
        } catch (error) {

            throw error

            
            
        }
    }

    async listpost(queries=[Query.equal("status","active")]){
        try {

            await this.databases.listDocuments(
                config.appwriteDataBaseId,
                config.appwriteCollectionId,
                queries,
            
            )

            return true
            
        } catch (error) {

            throw error

            
            
        }
    }


    //file upload service


    async uploadfile(file){

        try {

            await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
            
        } catch (error) {

            throw error
            
        }
    }


    async deletefile(fileID){

        try{
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileID

            )
        }catch(error){
            throw error
        }
    }


     filepreview(fileID){

        try{
            return this.bucket.getFilePreview(
                config.appwriteBucketID,
                fileID

            )
        }catch(error){
            throw error
        }

     }
}




const service=new Service();

export default service;


