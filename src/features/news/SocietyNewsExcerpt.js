import { useGetNewsQuery } from "./newsApiSlice"
import { formatDistance } from "date-fns"
import { useTheme } from "../../hooks/useTheme"

const SocietyNewsExcerpt = ({ newsId }) => {
    const { news } = useGetNewsQuery("newsList", {
        selectFromResult: ({ data }) => ({
            news: data?.entities[newsId],
        }),
    })

    const dateTag = formatDistance(new Date(news.createdAt), new Date(), {
        addSuffix: true,
    })

    const { bgColor } = useTheme()

    return (
        <a
            href={`/news/${news.id}`}
            className={`list-group-item list-group-item-action list-group-item-${bgColor}`}
        >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{news.title}</h5>
                <small>{dateTag}</small>
            </div>
            <p className="mb-1">{news.text}</p>
        </a>
    )
}
export default SocietyNewsExcerpt
