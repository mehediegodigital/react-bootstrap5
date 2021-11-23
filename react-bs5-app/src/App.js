import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
{/* <div className="container mt-3">
  <h2>Spinner Buttons</h2>
  <p>Add spinners to buttons:</p>
  <button className="btn btn-primary">
    <span className="spinner-border spinner-border-sm" />
  </button>
  <button className="btn btn-primary">
    <span className="spinner-border spinner-border-sm" />
    Loading..
  </button>
  <button className="btn btn-primary" disabled>
    <span className="spinner-border spinner-border-sm" />
    Loading..
  </button>
  <button className="btn btn-primary" disabled>
    <span className="spinner-grow spinner-grow-sm" />
    Loading..
  </button>
</div> */}

<div className="container mt-3">
  <h3>Modal Example</h3>
  <p>Click on the button to open the modal.</p>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>



<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" />
      </div>
      <div className="modal-body">
        Modal body..
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>














    </>
  );
}

export default App;
