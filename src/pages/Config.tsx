import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { ParticipantList } from "../components/ParticipantList";

const Config = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <ParticipantList />
        <Footer />
      </section>
    </Card>
  );
};

export default Config;
