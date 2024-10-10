import { useState } from "react";

function App(){
    const [wordcount, setwordcount] = useState('');
    const [paragraph, setparagraph] = useState('');
    const para =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, delectus cumque quae laudantium excepturi officiis eveniet, a possimus earum culpa rerum voluptas mollitia. Voluptate harum veniam quas provident ea id incidunt inventore dignissimos. Accusamus voluptas officiis, corporis eos tempora ullam enim explicabo esse dolores ad nihil animi aliquid obcaecati libero?'
    const handleGenerate=()=>{
        const count = parseInt(wordcount, 10);
        const words = para.split(' ');
        if(!isNaN(count) && count>0){
            const newParagraph = words.slice(0, count).join(' ');
            setparagraph(newParagraph);
            setwordcount('');
        }
        else{
            alert('Please enter a valid number');
        }
    }
    return(
        <div>
            <input 
            value={wordcount}
            type="number" 
            placeholder="Enter Number of words"
            onChange={(event)=>{setwordcount(event.target.value)}}></input>
            <button onClick={handleGenerate}>Generate</button>
            <p>{paragraph}</p>
        </div>
    )
}
export default App;