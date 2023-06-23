
const ErrorLabel = ({ message, type }) => {
  return (
    <>
      <p className={`alert ${type}`}>
        { message }
      </p>
    </>
  )
}

export default ErrorLabel;