require("prismjs/components/prism-markup-templating.js")
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-python");
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-php");
import styles from './CodeContent.module.scss';

type Props = {

    lang?: string,
    data?: string
}

const CodeContent = ({ lang, data }: Props) => {
    return (
        <div>
            <pre className={styles.pre}><code className={`language-${lang}`}>{data}</code></pre>
        </div>

    )
}


export default CodeContent;

