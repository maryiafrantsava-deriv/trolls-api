import React,{useState,useEffect} from "react";
const prism = require('prismjs')
require('prismjs/components/prism-python');
import styles from "./CodeSample.module.scss";

type Props = {
    id?:string,
    title?: string,
    desc?: string,
    subdesc?: string
}
const CodeSample = ({ id,title, desc, subdesc }: Props) => {

    const [jsContent, setjsContent] = useState('');

    useEffect(()=>{
        
        fetch(`/demoCode/${id}-javascript.js`).then((response)=>response.text()).then(data=>{
            
           console.log(`/demoCode/${id}-javascript.js`);
           
            setjsContent(data)  
            prism.highlightAll()
        }
        )
    },[])

   
   

  
    return (
        <div className={styles.codelock}>
            <h2 className={styles.codeBlockTitle}>{title}</h2>
            <p className={styles.codeBlockDesc}>{desc}</p>
            {subdesc && <p className={styles.codeBlockDesc}>{subdesc}</p>}
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <p className={styles.card_header_title}>
                        <select id="demo-buy-contract" >
                            <option value="javascript">JavaScript</option>
                            <option value="csharp">C#</option>
                            <option value="php">PHP</option>
                            <option value="python">Python</option>
                        </select>
                    </p>
                    <div className={styles.copy_button}>
                        <img className={styles.copy_button_image} src="./copy.svg" width="16" height="16" alt="copy code icon" /> Copy
                    </div>
                </div>
                <div className={styles.language_demos}>
              
                <pre className="language-javascript"><code>{jsContent}</code></pre>

                </div>

            </div>
        </div>
    )
}


export default CodeSample;