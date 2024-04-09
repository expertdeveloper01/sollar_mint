import * as Yup from 'yup';


export const collectionSchema = Yup.object().shape({
    banner: Yup.string().required("Banner Image is required"),
    cover: Yup.string().required("Cover Image is required"),
    name: Yup.string().required("Name is required"),
});