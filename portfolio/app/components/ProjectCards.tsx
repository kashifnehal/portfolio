import { CardDetailsProps } from "./constants"
import { CardDetails, CardHeading, CardImage, CardWrapper } from "./styled"
import Image from 'next/image'

const ProjectCards = (props: any) => {
    const { details } = props;
    const heading = details?.heading
    

    
    return <CardWrapper>
        {details && (
            <>
                <CardImage>
                    {/* <img src='./heroWrap.jpg' /> */}
                    <Image
                        src= {details.image}
                        width={500}
                        height={500}
                        alt="burger"
                    />
                </CardImage>
                <CardDetails>
                    <CardHeading>
                        {heading}
                    </CardHeading>
                    <div>{details.subheading}</div>
                </CardDetails>
            </>
        )}
    </CardWrapper>
}

export default ProjectCards