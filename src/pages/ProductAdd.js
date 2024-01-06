import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import TobetoTextInput from "../utilities/customFormControls/TobetoTextInput";

export default function ProductAdd() {
  const initialValues = {
    title: "",
    price: 10,
  };

  const schema = Yup.object({
    title: Yup.string().required("Ürün Adı Zorunlu"),
    price: Yup.number().required("Ürün Fiyatı Zorunludur."),
  });
  //Yup, doğrulama yapmamızı sağlayan bir yapıdır.
  return (
    <div>
      <Formik initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        <Form className="ui form">
            <TobetoTextInput name="title" placeholder="Ürün Adı"/>
            <TobetoTextInput name="price" placeholder="Ürün Fiyatı"/>
          {/* <FormField>
            <Field name="title" placeholder="Ürün Adı"></Field>
            <ErrorMessage name="title" render={error=>
                <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          {/* <FormField>
          <Field name="price" placeholder="Ürün Fiyatı"></Field>
          <ErrorMessage name="price" render={error=>
                <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
