import Link from "next/link";
import CodeSample from "components/common/CodeSample/CodeSample";



const codeSampleData = [
  {
    id: "buy-contract",
    title: "Buy contract",
    description: "A contract is an agreement to buy or sell an asset at an agreed-upon price. This example shows you how to buy a contract using Deriv API."
  },
  {
    id: "ticks",
    title: "Ticks",
    description: "A tick is a measure of minimum upward or downward movement in the price of a trading commodity. This example shows you how to collect ticks for your trading app using Deriv’s API."
  },
  {
    id: "balance",
    title: "Account balance",
    description: "This example shows you how to use the Deriv API to retrieve account balance information."
  },
  {
    id: "proposal",
    title: "Proposal",
    description: "This example is for getting a contract proposal. You’ll be able to get the price, payout and spot value for your contract.",
    subdescription: "To keep this connection alive in case of inactivity timeouts, see the example for Keep alive."
  },
  {
    id: "keep-alive",
    title: "Keep alive",
    description: "In this example you’ll see how to keep a connection alive when getting contract proposals via the Deriv API. This example keeps the connection alive by sending a ping every 30 seconds."
  }

]
const Docs: React.FC = () => {
  return (

    <div className="page-content">
      <h1 className="doc-main-title">Quickstart to Deriv API</h1>
      <div>
        <p>On this page, you&#39;ll find code samples in various programming languages showing you how to work
          with the Deriv API to perform some of the most important operations.</p>
        <p>You can find all of the other available calls in the  <Link href="/playground/"><a>API Playground</a></Link>.</p>
        <h3 className="api-sub-title bold">Before you begin</h3>
        <ul>
          <li>Open a <Link href="https://deriv.com/"><a>Deriv account</a></Link> (either a demo or real account).</li>
          <li>Create a new token using the <Link href="https://app.deriv.com/account/api-token"><a>admin scope</a></Link>.</li>
          <li>Register your app to receive your <b>app_id</b> or use <b>app_id 1089</b> to test Deriv API.</li>
        </ul>
        <h3 className="api-sub-title bold">Setting up your environment</h3>
        <p>Instructions for setting up your environment and running the examples in your desired programming
          language are given as comments in the code samples.</p>
      </div>
      {codeSampleData.map((data, index) =>
        <CodeSample key={index} id={data.id} title={data.title} desc={data.description} subdesc={data.subdescription} />
      )}


    </div>
  );
};

export default Docs;
