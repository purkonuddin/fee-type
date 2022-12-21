import * as Yup from "yup";

export const validateForm = Yup.object().shape({
  ftDescription: Yup.string()
    .min(1, "Too Short!")
    .max(225, "Too Long!")
    .required("Fee Type Description is required"),

  ftName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Fee Type Name is required"),

  ftCode: Yup.number().required("FT Code is required").positive().integer(),

  ftStatus: Yup.string().required(),
});
