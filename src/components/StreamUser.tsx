interface Props{
    streamUser:String
  }

  const StreamUser: React.FC<Props> = ({streamUser}) => {
    return(
        <p className='stream-name'> {streamUser} 
            <span> <svg type="color-fill-current" width="16px" height="16px" version="1.1" viewBox="0 0 16 16" x="0px" y="0px" className="badge"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 3.5L8 2L3.5 3.5L2 8L3.5 12.5L8 14L12.5 12.5L14 8L12.5 3.5ZM7.00008 11L11.5 6.5L10 5L7.00008 8L5.5 6.5L4 8L7.00008 11Z"></path></svg></span> 
        </p>
    )

}
export default StreamUser;
