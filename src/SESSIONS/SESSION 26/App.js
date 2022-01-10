import "./App.css";

export default function App() {
  return <Content />;
}

function Content() {
  return (
    // WHOLE CONTAINER
    <article className="App">
      {/* INDIVIDUAL CONTAINER */}
      <section>
        {/* HEADING */}
        <div className="heading">
          <p>FREE</p>
          <h1>
            $0<span>/month</span>
          </h1>
        </div>
        {/* CONTENT */}
        <div className="content">
          <p>
            <span className="active">✔</span> Single User
          </p>
          <p>
            <span className="active">✔</span> 5GB Storage
          </p>
          <p>
            <span className="active">✔</span> Unlimited Public Projects
          </p>
          <p>
            <span className="active">✔</span> Community Access
          </p>
          <p className="dull">
            <span className="inacive">✖</span> Unlimited Private Projects
          </p>
          <p className="dull">
            <span className="inacive">✖</span> Dedicated Phone Support
          </p>
          <p className="dull">
            <span className="inacive">✖</span> Free Subdomain
          </p>
          <p className="dull">
            <span className="inacive">✖</span> Monthly Status Reports
          </p>
        </div>
        {/* BUTTON CONTAINER */}
        <div className="buttonContainer">
          <button>BUTTON</button>
        </div>
      </section>
      {/* INDIVIDUAL CONTAINER */}
      <section>
        {/* HEADING */}
        <div className="heading">
          <p>PLUS</p>
          <h1>
            $9<span>/month</span>
          </h1>
        </div>
        {/* CONTENT */}
        <div className="content">
          <p>
            <span className="active">✔</span> 5 User
          </p>
          <p>
            <span className="active">✔</span> 50GB Storage
          </p>
          <p>
            <span className="active">✔</span> Unlimited Public Projects
          </p>
          <p>
            <span className="active">✔</span> Community Access
          </p>
          <p>
            <span className="active">✔</span> Unlimited Private Projects
          </p>
          <p>
            <span className="active">✔</span> Dedicated Phone Support
          </p>
          <p>
            <span className="active">✔</span> Free Subdomain
          </p>
          <p className="dull">
            <span className="inacive">✖</span> Monthly Status Reports
          </p>
        </div>
        {/* BUTTON CONTAINER */}
        <div className="buttonContainer">
          <button>BUTTON</button>
        </div>
      </section>
      {/* INDIVIDUAL CONTAINER */}
      <section>
        {/* HEADING */}
        <div className="heading">
          <p>PRO</p>
          <h1>
            $49<span>/month</span>
          </h1>
        </div>
        {/* CONTENT */}
        <div className="content">
          <p>
            <span className="active">✔</span> Unlimited User
          </p>
          <p>
            <span className="active">✔</span> 150GB Storage
          </p>
          <p>
            <span className="active">✔</span> Unlimited Public Projects
          </p>
          <p>
            <span className="active">✔</span> Community Access
          </p>
          <p>
            <span className="active">✔</span> Unlimited Private Projects
          </p>
          <p>
            <span className="active">✔</span> Dedicated Phone Support
          </p>
          <p>
            <span className="active">✔</span> Free Subdomain
          </p>
          <p>
            <span className="active">✔</span> Monthly Status Reports
          </p>
        </div>
        {/* BUTTON CONTAINER */}
        <div className="buttonContainer">
          <button>BUTTON</button>
        </div>
      </section>
    </article>
  );
}

// NETLIFY DELPOYED LINK:
//    https://frosty-ritchie-d318b3.netlify.app/
