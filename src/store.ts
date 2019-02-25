import { createStore, createTypedHooks } from "easy-peasy";
import model, { StoreModel } from "./model";

const { useActions, useStore, useDispatch } = createTypedHooks<StoreModel>();

export { useActions, useDispatch, useStore };

const store = createStore(model);

export default store;
