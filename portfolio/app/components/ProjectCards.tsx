import { CardDetails, CardHeading, CardImage, CardWrapper } from "./styled"
import Image from 'next/image'

const ProjectCards = (details: any) => {
    return <CardWrapper>
        <CardImage>
            {/* <img src='./heroWrap.jpg' /> */}
            <Image
                src="/time.jpeg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </CardImage>
        <CardDetails>
            <CardHeading>
                {details.heading}
            </CardHeading>
            <div>{'card subheading'}</div>
        </CardDetails>
    </CardWrapper>
}

export default ProjectCards