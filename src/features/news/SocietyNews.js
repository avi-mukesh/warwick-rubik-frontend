import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "react-responsive"
import { useGetNewsQuery } from "./newsApiSlice"
import SocietyNewsExcerpt from "./SocietyNewsExcerpt"

const SocietyNews = () => {
    const medium = useMediaQuery({
        query: "(min-width: 768px)",
    })

    const {
        data: news,
        isFetching,
        isSuccess,
        isError,
        error,
    } = useGetNewsQuery("newsList", {
        pollingInterval: 30 * 60 * 1000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    })

    let newsItems
    if (isFetching) {
        newsItems = <p>Loading...</p>
    } else if (isSuccess) {
        const { ids } = news
        newsItems =
            ids?.length && ids.map((id) => <SocietyNewsExcerpt key={id} newsId={id} />)
    } else if (isError) {
        newsItems = <p>{error}</p>
    }

    return (
        <section className="container">
            <h3 className="display-6">Latest society news</h3>
            <p className="lead">
                Your fix for everything Warwick Rubik{" "}
                <FontAwesomeIcon icon="newspaper" />
            </p>

            <article
                className={`list-group ${medium && "list-group-horizontal"}`}
            >
                {newsItems}
            </article>
        </section>
    )
}

export default SocietyNews
