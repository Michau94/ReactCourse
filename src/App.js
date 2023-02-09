import Button from "./Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      App
      <div>
        <Button primary warning rounded outline>
          mlem
        </Button>
      </div>
      <div>
        <Button warning>test</Button>
      </div>
      <div>
        <Button secondary outline>
          Deal!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Something
        </Button>
      </div>
    </div>
  );
}
