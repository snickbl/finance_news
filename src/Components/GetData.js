import { useEffect } from "react";
import { 
  collection,
  orderBy,
  query,
  onSnapshot,} from "firebase/firestore";
import { db } from '../firebase';
import { useDispatch } from "react-redux";
import {newsSlice} from "../toolkitRedux/newsSlice";

export const GetData = () => {
  
    const {getNews} = newsSlice.actions
    const dispatch = useDispatch()

    useEffect(() => {
      try{
        dispatch(newsSlice.actions.dataLoading())
          const q = query(collection(db, "0"), orderBy("date"));
          const unsub = onSnapshot(q, (querySnapshot) => {
          let newsArray = [];
          querySnapshot.forEach((doc) => {
            newsArray.push({ ...doc.data(), id: doc.id });
          });
          
          dispatch(getNews(newsArray))
          
          });
          return () => unsub();
      }catch{
        GetData()
      }
    }, []);
}
