export default function Slots({}) {
const H1 = <>🍔</>
const H3 = <>🍒</>
const H4 = <>🍆</>
const rand1  =  Math.floor(Math.random()*3)+1;
const rand2  =  Math.floor(Math.random()*3)+1;
const rand3  =  Math.floor(Math.random()*3)+1;




const win = rand1===rand2 && rand1===rand3;
return(
    <div>
       <h1>{rand1 === 1 ? H1 : rand1 === 2 ? H3 : H4} {rand2 === 1 ? H1 : rand2 === 2 ? H3 : H4} {rand3 === 1 ? H1 : rand3 === 2 ? H3 : H4} </h1>
            <h2>
                {win ? 'Ganaste' : 'Perdiste segui tirando'}
            </h2>
            {win && <h1>Ganaste fachaaa</h1>}
        
    </div>
)
}