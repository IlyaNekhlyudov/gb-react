import {useEffect} from "react";
import {connect} from "react-redux";
import {getNews} from "../../store/reducers/newsReducer";
import News from "./News";

const NewsContainer = ({popularList, needUpdate, getNews, loading, error}) => {

    useEffect(() => {
        document.title = 'Новости The New York Times';

        if (Object.keys(popularList).length === 0 
            || needUpdate > new Date()) {
            getNews();
        }

        // eslint-disable-next-line
    }, []);

    return (
        <News
            loading={loading}
            error={error}
            getNews={getNews}
            popularList={popularList}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        popularList: state.news.popular,
        needUpdate: state.news.needUpdate,
        loading: state.news.isLoading,
        error: state.news.error
    }
}

export default connect(mapStateToProps, {getNews})(NewsContainer);