//Kendi form elemanımızı burada yazacaz.
//Diğer kütüphane elemanlarıyla karışmaması için başına Tobeto gibi imza isim yazdık.
import React from 'react'
import { useField} from 'formik'
import { FormField, Label } from 'semantic-ui-react'

export default function TobetoTextInput({...props}) {
    //console.log(props)
    //reflect api
    const [field,meta] = useField(props)
    //console.log(meta)

    // !! işareti string'i bool olarak döndürmek için kullanılır.
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props}/>
            {/*Ternary Operatörü*/meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}
