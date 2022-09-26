import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
    faFaceSmile,
    faChampagneGlasses,
    faEnvelope,
    faPeopleGroup,
    faNewspaper,
    faTrophy,
    faCalendarDay,
    faSadCry,
} from "@fortawesome/free-solid-svg-icons"

export const useFontAwesome = () => {
    library.add(
        fab,
        faFaceSmile,
        faChampagneGlasses,
        faEnvelope,
        faPeopleGroup,
        faNewspaper,
        faTrophy,
        faCalendarDay,
        faSadCry
    )
}
