
const Dialog = (props) => {
  const style = {
    minWidth: '600px',
    maxWidth: '700px',
    margin: '3px,'
  };
  return (

    <dialog className="fixed top-36 z-20" open={props.open} onClose={props.handleToClose}>
      <div style={style} className="">
        <div className="flex px-4">
          <div className="">{props.name}</div>
          <div className="grow" />
          <div className="flex">
            Hỗ Trợ
            <div className="mt-1 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 32 32" id="question"><g data-name="Question"><path d="M16,0A16,16,0,1,0,32,16,16.019,16.019,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14.015,14.015,0,0,1,16,30Z"></path><path d="M16,6a6.006,6.006,0,0,0-6,6h2a4,4,0,0,1,4-4,4,4,0,0,1,1.151,7.832A2.985,2.985,0,0,0,15,18.7V22h2V18.7a1,1,0,0,1,.726-.953A6,6,0,0,0,16,6Z"></path><rect width="2" height="2" x="15" y="24"></rect></g></svg>

            </div>
          </div>
        </div>

        <div className="m-3">{props.body}</div>

        <div className="flex m-3">
          <div className="">{props.name}</div>
          <div className="grow" />
          <button className="" onClick={props.handleToClose}
            color="primary" autoFocus>
            Close
          </button>
        </div>

      </div>
    </dialog >
  );
}

export default Dialog;
