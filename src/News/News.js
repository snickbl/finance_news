import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import Loading from "../Components/Loading";
import News_item from "./News_item";
import {Link} from "react-router-dom";

export default function News() {
   
    const {isLoading} = useSelector(state => state.newsSlice)

    let {id} = useParams()

    let novost = {}

    const news = useSelector(state => state.newsSlice.news)
    news.map(element => {
        if(element.id === id){
            novost = element
        }
    })

    function CheckLoad() {
        if (isLoading) {
          return <Loading/>
        } else {
            return <News_item novost={novost}/>
        }
      }

    return(
        <>
            <div className="container">
                <Link className='return_button' to={'/'}>
                    <div className="return_btn">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                </Link>
                <div className="articles loadingmode">
                    <CheckLoad/>
                </div>

            </div>
        </>
    )
}