interface Props{
    streamName:String
}

const StreamTitle: React.FC<Props> = ({streamName}) => {

    return (
        <p className='stream-title'> {streamName}</p>
    )
}

export default StreamTitle;