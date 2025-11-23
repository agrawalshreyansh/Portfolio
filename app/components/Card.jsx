import PropTypes from 'prop-types'
import { MoveUpRight } from 'lucide-react'

const Card = ({ key, img, title, description, timeline, url }) => {
    return (
        <div className='flex justify-between hover:bg-bg-secondary px-4 py-5 rounded-xl cursor-pointer transition-all duration-300 group' key={key} onClick={() => url && window.open(url, '_blank')}>
            <div>
            {img &&
                <div>
                    <img src={img} />
                </div>}
            <div className='flex flex-col gap-3 w-[70%]'>
                {title && <h4 className="text-2xl font-semibold text-white">{title}</h4>}
                {description && <p className="text-[#a4a6aa]">{description}</p>}
                {timeline && <p className="text-[#a4a6aa]">{timeline}</p>}
            </div>
            </div>
            <div className='transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2'>
                <MoveUpRight className='text-text-primary mt-4'/>
            </div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    timeline: PropTypes.string,
    url: PropTypes.string,
}

export default Card