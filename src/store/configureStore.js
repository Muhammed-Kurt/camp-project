import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";

//Mağazayı oluşturduğumuz yer.
export function configureStore() {
    return createStore(rootReducer,devToolsEnhancer())
}

//!!!Chrome'a redux devtools uzantısını kurduk.