  import { useState } from "react";
  import MainContent from "./Component/MainContent/MainContent";
  import Sidebar from "./Component/Sidebar/Sidebar";
  import { FullScreen, useFullScreenHandle } from "react-full-screen";

  function App() {

    const [show, setShow] = useState(false);

    const handle = useFullScreenHandle();
    const handleSidebar = () => {
      setShow(!show);
    }

    return (
      <>
        <FullScreen className="bg-white" handle={handle}>
          <div className="d-flex ">
            <Sidebar show={show} />
            <MainContent className="col" handleSidebar={handleSidebar} handle={handle}/>
          </div>
        </FullScreen>
      </>
    );
  }

  export default App;
