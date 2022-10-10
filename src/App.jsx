import Wrapper from "./componants/Wrapper";
import Screen from "./componants/Screen";
import ButtonBox from "./componants/ButtonBox";
import Button from "./componants/Button";
import CalcProvider from "./context/CalcContext";

function App() {

  const btnValue = [
    ["C","-+","%","/"],
    [7,8,9,'x'],
    [4,5,6,"-"],
    [1,2,3,'+'],
    [0,'.',"="]
  ]
    

  return (
    <div className="bg-slate-200 min-h-screen w-full flex justify-center items-center font-poppins ">
      <CalcProvider>
        <Wrapper >
          <Screen/>
          <ButtonBox>
            {
              btnValue.flat().map((btn,i) =>{
                return <Button value={btn} key={i}/>
              })
            }
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default App;
